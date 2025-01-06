numbers=document.querySelectorAll('.btn')
operations=document.querySelectorAll('.operations')
clear=document.querySelector('.clear')
display=document.querySelector('.display')
equal=document.querySelector('.equal')

numbers.forEach(no => {
    no.addEventListener('click',()=>{
        display.innerHTML=display.innerHTML+ no.innerHTML;
    })
});

operations.forEach(sign=>{
    sign.addEventListener('click',()=>{
        const lastChar= display.innerHTML.slice(-1)
        {
            if(['+','-','*','/'].includes(lastChar)&& lastChar!==sign.innerHTML)
            {
                display.innerHTML=display.innerHTML.slice(0,-1)
            }
        }
        display.innerHTML=display.innerHTML+sign.innerHTML
    })
})
equal.addEventListener('click',()=>{
   let res=  eval(display.innerHTML)
   display.innerHTML=res

})

function reset()
{
    display.innerHTML=''
}
clear.addEventListener('click',(reset))

