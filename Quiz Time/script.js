const quesList = [
    {
      ques: 'Inside which HTML element do we put the JavaScript?',
      a: '<js>',
      b: '<scripting>',
      c: '<javascript>',
      d: '<script>',
      correct: '<script>',
    },
    {
      ques: 'What is the correct syntax for referring to an external script file?',
      a: '<script href="script.js">',
      b: '<script src="script.js">',
      c: '<script ref="script.js">',
      d: '<script name="script.js">',
      correct: '<script src="script.js">',
    },
    {
      ques: 'How do you write "Hello World" in an alert box?',
      a: 'alertBox("Hello World");',
      b: 'msg("Hello World");',
      c: 'msgBox("Hello World");',
      d: 'alert("Hello World");',
      correct: 'alert("Hello World");',
    },
    {
      ques: 'How do you create a function in JavaScript?',
      a: 'function = myFunction()',
      b: 'function myFunction()',
      c: 'function: myFunction()',
      d: 'create.myFunction()',
      correct: 'function myFunction()',
    },
    {
      ques: 'How do you call a function named "myFunction"?',
      a: 'call function myFunction()',
      b: 'myFunction()',
      c: 'call myFunction()',
      d: 'Call.myFunction()',
      correct: 'myFunction()',
    },
    {
      ques: 'How to write an IF statement in JavaScript?',
      a: 'if i == 5 then',
      b: 'if i = 5',
      c: 'if (i == 5)',
      d: 'if i = 5 then',
      correct: 'if (i == 5)',
    },
    {
      ques: 'How to write an IF statement for executing code if "i" is NOT equal to 5?',
      a: 'if (i != 5)',
      b: 'if i <> 5',
      c: 'if (i <> 5)',
      d: 'if i =! 5 then',
      correct: 'if (i != 5)',
    },
    {
      ques: 'How does a WHILE loop start?',
      a: 'while (i <= 10; i++)',
      b: 'while (i <= 10)',
      c: 'while i = 1 to 10',
      d: 'while (i =< 10)',
      correct: 'while (i <= 10)',
    },
    {
      ques: 'How does a FOR loop start?',
      a: 'for (i = 0; i <= 5; i++)',
      b: 'for i = 1 to 5',
      c: 'for (i <= 5; i++)',
      d: 'for (i = 0; i <= 5)',
      correct: 'for (i = 0; i <= 5; i++)',
    },
    {
      ques: 'What is the correct way to write a comment in JavaScript?',
      a: '<!-- This is a comment -->',
      b: '// This is a comment',
      c: '** This is a comment',
      d: '/* This is a comment */',
      correct: '// This is a comment',
    },
    {
      ques: 'What is the correct way to declare a JavaScript variable?',
      a: 'variable myVar',
      b: 'v myVar',
      c: 'var myVar',
      d: 'declare myVar',
      correct: 'var myVar',
    },
    {
      ques: 'Which operator is used to assign a value to a variable?',
      a: '=',
      b: '-',
      c: '*',
      d: 'x',
      correct: '=',
    },
    {
      ques: 'What will `typeof []` return in JavaScript?',
      a: 'Array',
      b: 'Object',
      c: 'List',
      d: 'undefined',
      correct: 'Object',
    },
    {
      ques: 'Which event occurs when the user clicks on an HTML element?',
      a: 'onmouseclick',
      b: 'onchange',
      c: 'onclick',
      d: 'onmouseover',
      correct: 'onclick',
    },
    {
      ques: 'How do you find the number with the highest value of x and y?',
      a: 'ceil(x, y)',
      b: 'Math.max(x, y)',
      c: 'Math.high(x, y)',
      d: 'top(x, y)',
      correct: 'Math.max(x, y)',
    },
    {
      ques: 'Which JavaScript method is used to write into an HTML element?',
      a: 'innerHTML()',
      b: 'document.write()',
      c: 'document.getElement()',
      d: 'element.innerHTML',
      correct: 'element.innerHTML',
    },
    {
        ques: 'What will `console.log(0.1 + 0.2 === 0.3)` return?',
        a: 'true',
        b: 'false',
        c: 'undefined',
        d: 'NaN',
        correct: 'false',
      },
    {
      ques: 'What is the correct way to check if a variable is an array?',
      a: 'Array.isArray(variable)',
      b: 'typeof variable === "array"',
      c: 'variable.isArray()',
      d: 'variable instanceof Array',
      correct: 'Array.isArray(variable)',
    },
    {
      ques: 'Which of the following is NOT a JavaScript data type?',
      a: 'String',
      b: 'Boolean',
      c: 'Float',
      d: 'Undefined',
      correct: 'Float',
    },
    {
      ques: 'Which keyword is used to define a constant in JavaScript?',
      a: 'let',
      b: 'var',
      c: 'constant',
      d: 'const',
      correct: 'const',
    },
    {
      ques: 'Which of the following will add an element to the end of an array?',
      a: 'array.add("element")',
      b: 'array.append("element")',
      c: 'array.push("element")',
      d: 'array.insert("element")',
      correct: 'array.push("element")',
    },
    {
      ques: 'What is the output of `Boolean(0)` in JavaScript?',
      a: 'false',
      b: 'true',
      c: 'undefined',
      d: '0',
      correct: 'false',
    },
    {
      ques: 'What will `2 + "2"` evaluate to in JavaScript?',
      a: '22',
      b: '4',
      c: 'NaN',
      d: 'undefined',
      correct: '22',
    },
    {
      ques: 'How can you detect the client’s browser name?',
      a: 'navigator.appName',
      b: 'browser.name',
      c: 'window.browser',
      d: 'client.name',
      correct: 'navigator.appName',
    },
    {
      ques: 'What is the output of `typeof null` in JavaScript?',
      a: 'Object',
      b: 'Null',
      c: 'undefined',
      d: 'Number',
      correct: 'Object',
    },
  ];
music=document.getElementById('music')
speaker=document.querySelector('.speaker')
score=document.getElementById('variablescore')
next=document.querySelector('.next')
timerDisplay=document.querySelector('.timer')
startBtn=document.querySelector('.startbtn')
opt=document.querySelectorAll('.opt')
answer=document.querySelectorAll('.answer')
question=document.querySelector('.question')
form=document.querySelector('form')
let i=-1
let correct=0
let wrong=0
let timer
let currScore=0
// let selectedAnswers = {};
// function savedProgress() {
//     localStorage.setItem('currScore', currScore.toString());
//     localStorage.setItem('currentQuestionIndex', i.toString());
//     localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
//     localStorage.setItem('quesList', JSON.stringify(quesList)); // Store current question and options
//     console.log(`Progress saved: Score - ${currScore}, Question Index - ${i}, Answers -`, selectedAnswers);
// }

//     window.onload = function loadProgress()
//     {
//     let savedScore = localStorage.getItem('currScore');
//     let savedIndex = localStorage.getItem('currentQuestionIndex');
//     let savedAnswers = localStorage.getItem('selectedAnswers');
//     let savedQuestionList = localStorage.getItem('quesList');

//         if (savedScore !== null)
//         {
//             currScore=parseInt(savedScore)
//             if (isNaN(currScore)) 
//                 {
//                     currScore = 0;
//                 }
//             score.innerText = currScore
//             console.log('score loaded',currScore);
//         }
//         if(savedIndex!==null)
//         {
//             i=parseInt(savedIndex)
//         }

//         if (savedAnswers !== null) {
//             selectedAnswers = JSON.parse(savedAnswers);
//         }
    
//         if (savedQuestion !== null) {
//             quesList = JSON.parse(savedQuestionList); // Restore current question and options
//         }
//         displayQuestion()
//     }
next.addEventListener('click',nextQuestion)

function nextQuestion(){
    if(i>-1)
    {
        let check=false
    
    
    for(tick of opt)
    {
        if(tick.checked)
        {
            check=true
            break
        }
        
    }
    
    if(!check)
        {
            alert('No Option is Selected!!')
            return
        }
    }
    currScore=parseInt(score.innerText)
    if (isNaN(currScore)) 
        {
            currScore = 0;
        }

    if(currScore<25)
    {
        score.innerText=currScore+1

    }
    
    time()
    resetTime()
    
    
    
    if(i<quesList.length-1)
    {
        i++
        displayQuestion()
        document.querySelectorAll(".answer").forEach(div => div.style.backgroundColor = "");
    }
    else{
        alert('no more questions left')
        // next.style.display='none'
        timerDisplay.style.display='none'
        next.textContent='Submit'
        next.removeEventListener('click',nextQuestion)
        next.addEventListener('click',submit)

    }
    opt.forEach(e =>{
        e.disabled=false
        e.checked=false
    })
    // if (selectedAnswers[i]) {
    //     opt.forEach(e => {
    //         if (e.value === selectedAnswers[i]) {
    //             e.checked = true;
    //         }
    //     });
    
    
    if(!speaker.classList.contains('mute'))
    {
        music.play() 
        music.muted=false
    }
  }

// }
// startBtn.addEventListener('click',()=>{
//     console.log('music running');
//      music.play()                                                              
// })
 function time(){
    if(timer)
    {
        clearInterval(timer)
    }
    let timeLeft=30
    timerDisplay.innerText=timeLeft
    timer=setInterval(()=>{
        timeLeft--
        timerDisplay.innerText=timeLeft

        if(timeLeft<15)
        {
            document.body.style.backgroundColor ='#DBDDB1'
            timerDisplay.style.backgroundColor='#CCBF3A'
        }
        if(timeLeft<6)
            {
                document.body.style.backgroundColor ='#DBADAD'
                timerDisplay.style.backgroundColor='#CC4038'
            }
        if (timeLeft === 0) 
            {
                clearInterval(timer);
                alert('Time is up!');
                wrong++
                console.log('wrong ans:',wrong);
                opt.forEach(e =>{
                    e.disabled=true
                })
            }
    },1000)
 }
 function resetTime()
 {
    timeLeft=30
    document.body.style.backgroundColor ='#CCE2C2'
    timerDisplay.style.backgroundColor='#43B845'

 }
 function displayQuestion(){
    if(i<quesList.length)
    {
        const quesElement=document.querySelector('.question')
        const optionA = document.getElementById('option1');
        const optionB = document.getElementById('option2');
        const optionC = document.getElementById('option3');
        const optionD = document.getElementById('option4');

        quesElement.innerText = quesList[i].ques;
        optionA.nextElementSibling.innerText = quesList[i].a;
        optionB.nextElementSibling.innerText = quesList[i].b;
        optionC.nextElementSibling.innerText = quesList[i].c;
        optionD.nextElementSibling.innerText = quesList[i].d;
    }
    else {
        alert('Quiz finished!');
    }
    }
    
        opt.forEach(element => {
            element.addEventListener('change',()=>{
                opt.forEach(e =>{
                    e.disabled=true
                })
                const parentDiv = element.closest(".answer");
                const selectedText = parentDiv.querySelector(".ans").innerText.trim();
                const correctAns= quesList[i].correct.trim()
                if (selectedText === correctAns ) 
                    {
                        parentDiv.style.backgroundColor='green'
                        correct++
                        console.log('correct ans:',correct);
                    }
                    else{
                         parentDiv.style.backgroundColor='red'
                         wrong++
                         console.log('wrong ans:',wrong);

                         
                    }
                    opt.forEach(ev=>{
                        const ans=ev.closest('.answer').querySelector(".ans").innerText.trim();
                        if(ans===correctAns)
                        {
                            ev.closest('.answer').style.backgroundColor='green'
                        }
                    })
            })
            
        });
        
    speaker.addEventListener('click',()=>{
        speaker.classList.toggle('mute')
        if(speaker.classList.contains('mute'))
        {
            music.pause()
            music.muted=true
        }
        else{
            music.play()
            music.muted=false
        }


    })
    function submit(){
        question.innerText=(`your correct ans are:${correct} out of 25`);

        if((correct/25)*100>80)
        {
            form.innerText=('Wow!! you have good concepts of java script');
            document.body.style.backgroundColor ='#CCE2C2'


        }
        else if((correct/25)*100>60&&(correct/25)*100<=80)
        {
            form.innerText=('You need to work little more harder!!');
            document.body.style.backgroundColor ='#DBDDB1'

        }
        else{
            form.innerText=('You need more pratice and knowledge for Java Script');
            document.body.style.backgroundColor ='#DBADAD'

        }
        form.style.fontSize='2rem'
        clearInterval(timer)
    }
   

    
   
 


