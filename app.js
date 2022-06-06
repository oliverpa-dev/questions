'use strict';

// array with questions
const quizData = [
    {
        question: 'How old is Oliver?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct:  'c'
    },
    {
        question: 'What is the best programming language?',
        a: 'js',
        b: 'c++',
        c: 'c#',
        d: 'ruby',
        correct:  'b'
    },
    {
        question: 'Who is the President of Poland?',
        a: 'Kaczyński',
        b: 'Duda',
        c: 'Morawiecki',
        d: 'Trzaskowski',
        correct: 'b',
    }
]

// index for the question
let currentQuestion = 0;


// html elements with id of 'a,b,c,d-text
const submitEl = document.getElementById('submit');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

// function where questions are going to be loaded
loadQuiz();

// function for loading the question together with the answers
function loadQuiz() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;
}

submitEl.addEventListener('click', () => {
   currentQuestion++;

    if(currentQuestion < quizData.length) {
        loadQuiz(); 
    } else {
        currentQuestion = 0;
        alert('You have finished the questionarie');
    }

});