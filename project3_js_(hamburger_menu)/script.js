const hamburgerIcon=document.querySelector('.lines')
const headerContent=document.querySelector('.navbar')
const closeIcon=document.querySelector('.crossimg')

hamburgerIcon.addEventListener('click',(e)=>{
    headerContent.style.display='block'
    hamburgerIcon.style.display='none'
    console.log('clicked');

})
closeIcon.addEventListener('click',(e)=>{
    headerContent.style.display='none'
    hamburgerIcon.style.display='block'
})
