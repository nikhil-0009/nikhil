const checkBoxList=document.querySelectorAll('.btn')
const inputFields=document.querySelectorAll('.goal')
const alert=document.querySelector('.alert')
const progressValue=document.querySelector('.progress-bar')
const allGoals= JSON.parse(localStorage.getItem('allGoals'))|| {
    one:{
        name:'',
        completed:false,
    },
    two:{
        name:'',
        completed:false,
    },
    three:{
        name:'',
        completed:false,
    },
}
let completedGoalsCount= Object.values(allGoals).filter((goal)=>goal.completed).length
progressValue.style.width=`${completedGoalsCount/3*100}%`
progressValue.firstElementChild.innerText=`${completedGoalsCount}/3 completed`

checkBoxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        const allGoalsAdded=[...inputFields].every(function(input)
    {
        return input.value
    })
        if(allGoalsAdded){
            checkbox.parentElement.classList.toggle('completed')
            
            const inputId=checkbox.nextElementSibling.id
            console.log(inputId);
            allGoals[inputId].completed=!allGoals[inputId].completed
            completedGoalsCount= Object.values(allGoals).filter((goal)=>goal.completed).length
            progressValue.style.width=`${completedGoalsCount/3*100}%`
            progressValue.firstElementChild.innerText=`${completedGoalsCount}/3 completed`
            localStorage.setItem('allGoals',JSON.stringify(allGoals))
            }
        else{
            alert.style.display='block'
        }
        
    })
})

inputFields.forEach((input)=>{

    
    input.value=allGoals[input.id].name
    if(allGoals[input.id].completed){
        input.parentElement.classList.add('completed')
    }

    input.addEventListener('focus',()=>{
        alert.style.display='none'
    })
    input.addEventListener('input',(e)=>{
        if(allGoals[input.id].completed)
        {
            input.value=allGoals[input.id].name
            return
        }
        allGoals[input.id]={
            name:input.value,
            completed:false,
        }
        localStorage.setItem('allGoals',JSON.stringify(allGoals))
    })
})
