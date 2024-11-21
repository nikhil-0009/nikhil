const plus=document.querySelectorAll('.symbol')
const para=document.querySelectorAll('.para')
const minus=document.querySelectorAll('.minus')

plus.forEach((sign,i)=>{
    sign.addEventListener('click',()=>{
        para[i].classList.remove('hidden')
        plus[i].classList.add('hidden')
        minus[i].classList.remove('hidden')

    })
})

minus.forEach((sign,i)=>{
    sign.addEventListener('click',()=>{
        para[i].classList.add('hidden')
        plus[i].classList.remove('hidden')
        minus[i].classList.add('hidden')
    })
})