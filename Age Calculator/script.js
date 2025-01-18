inputFields=document.querySelectorAll('input')
calculate=document.querySelector('.btn')
years=document.querySelector('.years')
months=document.querySelector('.months')
days=document.querySelector('.days')


calculate.addEventListener('click',()=>{
    const dd=parseInt(inputFields[0].value)
    const mm=parseInt(inputFields[1].value)
    const yy=parseInt(inputFields[2].value)

    if(inputFields[0].value>31 || inputFields[0].value<1)
    {
        alert('enter a valid value in days between 1-31')
        return
    }
    if(inputFields[1].value>12 || inputFields[1].value<1)
        {
            alert('enter a valid value in months between 1-12')
            return
        }
    if(inputFields[2].value<1922)
        {
                alert('enter a valid year of birth')
                return
        }
    if(!inputFields[0].value || !inputFields[1].value || !inputFields[2].value)
    {
        alert('enter all the values')
        return
    }
    console.log('all values correct');
    // console.log(new Date());
    console.log(dd,mm,yy);
   
    function todayDate(){
        const tdd= new Date().getDate()
        const tmm= new Date().getMonth()+1
        const tyy= new Date().getFullYear()
        console.log(tdd);
        console.log(tmm);
        console.log(tyy);

        function resultDate()
        {
        let resdd=tdd-dd
        let resmm=tmm-mm
        let resyy=tyy-yy

        if (resdd < 0) {
            const daysInPrevMonth = new Date(tyy, tmm - 1, 0).getDate(); // Days in previous month
            resdd += daysInPrevMonth;
            resmm -= 1;
        }

        // Adjust for negative months
        if (resmm < 0) {
            resmm += 12;
            resyy -= 1;
        }
        years.innerHTML=resyy
        months.innerHTML=resmm
        days.innerHTML=resdd
        }

        resultDate()

    }
    todayDate()

    

})


