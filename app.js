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
let score = 0;


// html elements with id of 'a,b,c,d-text
const submitEl = document.getElementById('submit');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const quiz = document.getElementById('quiz');

// function where questions are going to be loaded
loadQuiz();

/**
 * Represents quiz's questions with answers
 * @param {object} currentQuiz - Question data
 */
function loadQuiz() {
    const currentQuiz = quizData[currentQuestion];
    // setting the text value inside the html
    questionEl.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;
}

/**
 * Represents selected question
 */
function getSelectedAnswer() {
    const answersEls = document.querySelectorAll('.answer');
    let answer = undefined;

    // looping over answers
    answersEls.forEach(answerEl => {

        if (answerEl.checked) {
            answer = answerEl.id;
        }

    });

    return answer;
}

submitEl.addEventListener('click', () => {
    // checked to see the answer
    const answer = getSelectedAnswer();
    /**
     * Represents adding and substracting
     * @param {answer} - 
     */
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++
        }
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h3 class="header-center">Your score is three out of ${score}</h3>`
            }
    }
});