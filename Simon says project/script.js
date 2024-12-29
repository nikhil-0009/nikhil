let gameSeq=[]
let userSeq=[]
let started =false
let h3 = document.querySelector('h3')
let highestScore= document.querySelector('h2')
let scr=0
let  level=0
let btns=['one','two','three','four']

document.addEventListener('keypress',()=>{
    if(started==false)
    {
        console.log('Game started!!');
        started=true
        levelUp()
    }
})
function bntFlash(btn)
{
    btn.classList.add("flash")
    setTimeout(function()
{
    btn.classList.remove('flash')
},200)
}
function levelUp()
{
    userSeq= []
    level++
    h3.innerText=`Level ${level}`
    let randIdx =Math.floor(Math.random()*btns.length)
    let randcolor=btns[randIdx]
    let randBtn=document.querySelector(`.${randcolor}`)
    gameSeq.push(randcolor)
    console.log(gameSeq);
    bntFlash(randBtn)
}
score=level
console.log(score);

function checkAns(idx){
    // let idx=level-1
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,500)
        }
    }
    else{
        if(level-1>scr)
        {
            scr=level-1
            highestScore.innerHTML= `Highest Score: ${scr}`
        }
        h3.innerHTML=` Game over, Your Score was <b> ${level} </b> <br> press any key to start`
         document.querySelector('body').style.backgroundColor='#FF3333'
        
        setTimeout(function(){
            alert('Game over, press any key to start');
            document.querySelector('body').style.backgroundColor='white'
        },150)
        resetGame()
    }
}
function btnPress()
{
    console.log();
    let btn=this
    bntFlash(btn) 
    let userColor=btn.getAttribute('id')
    console.log(userColor);
    userSeq.push(userColor)
    checkAns(userSeq.length-1 )
}

allBtns=document.querySelectorAll('.box')
for(btn of allBtns)
{
    btn.addEventListener('click',btnPress)
}
function resetGame()
{
    userSeq=[]
    gameSeq=[]
    started=false
    level=0
}

