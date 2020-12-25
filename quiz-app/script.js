const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];




const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById('submit');
const answerEls = document.querySelectorAll(".answer");  
const quiz = document.getElementById('quiz');

let currentQuiz = 0;
score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    questionEl.innerText = quizData[currentQuiz].question;
    a_text.innerText = quizData[currentQuiz].a;
    b_text.innerText = quizData[currentQuiz].b;
    c_text.innerText = quizData[currentQuiz].c;
    d_text.innerText = quizData[currentQuiz].d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    })
}

function getSelected(){
    let answer = undefined
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submit.addEventListener('click', function(){
   
    let answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You answer correctly at ${score} / ${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;     
        }
    }
})

// const quiz = document.getElementById("quiz");
// const answerEls = document.querySelectorAll(".answer");  
// const questionEl = document.getElementById("question");
// const a_text = document.getElementById("a_text");
// const b_text = document.getElementById("b_text");
// const c_text = document.getElementById("c_text");
// const d_text = document.getElementById("d_text");
// const submitBtn = document.getElementById("submit");

// let currentQuiz = 0;
// let score = 0;

// loadQuiz();

// function loadQuiz(){

//     deselectAnswers();

//     const currentQuizData = quizData[currentQuiz];

//     questionEl.innerHTML = currentQuizData.question;
//     a_text.innerHTML = currentQuizData.a;
//     b_text.innerHTML = currentQuizData.b;
//     c_text.innerHTML = currentQuizData.c;
//     d_text.innerHTML = currentQuizData.d;
    
// }

// function getSelected(){
  

//     let answer = undefined;

//     answerEls.forEach(answerEl => {
//         if(answerEl.checked){
//            answer = answerEl.id;
//         }
//     });
//     return answer;
// }

// function deselectAnswers(){
//     answerEls.forEach(answerEl => {
//         answerEl.checked = false;   
//     });
// }

// submitBtn.addEventListener('click', () => {
//     // check to see the answer
//     const answer = getSelected();
//     console.log(answer);
//     if(answer){
//         if(answer === quizData[currentQuiz].correct){
//             score++;
//         }
//         currentQuiz++;
//         if(currentQuiz < quizData.length){
//             loadQuiz();
//         }else{
//             quiz.innerHTML =  `<h2>You answer correctly at ${score} / ${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`
//         }
//     }
// });
