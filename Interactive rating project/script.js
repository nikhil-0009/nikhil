const ratings=document.querySelectorAll('.nos')
const submit = document.querySelector('.btn')
const mainBox= document.querySelector('.box')
const thankyouBox=document.querySelector('.selectedbox')
const rate=document.getElementById('rate')
const rateagain=document.querySelector('.rateagain')
let scoreBtn=null         //assigned for disabling ratingstyle class from rateagain as score element has limited scope only till ratings
submit.addEventListener('click',()=>{
    thankyouBox.classList.remove('hidden')
    mainBox.classList.add('hidden')
})
ratings.forEach((score)=>{
    score.addEventListener('click',()=>{
        rate.innerHTML= score.innerHTML
        score.classList.add('ratingstyle')
        scoreBtn=score
        score.disabled=true;
    })
})
rateagain.addEventListener('click',()=>{
    thankyouBox.classList.add('hidden')
    mainBox.classList.remove('hidden')
    scoreBtn.classList.remove('ratingstyle')
    scoreBtn.disabled=true
    // score.style.backgroundColor='black'
    // score.style.color='white'
})