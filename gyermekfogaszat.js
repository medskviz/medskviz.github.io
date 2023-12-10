const quizData = [
    {
        question: "A mesiodens olyan fog,amely",
        a: "tipikus,és a felső tejmoláris fog régióban jelentkezik",
        b: "atipikus,és a felső nagymetszők között jelentkezik",
        c: "atipikus,és az alsó nagymetsző régióban jelentkezik",
        correct: "a",
    },
    {
        question: "Mikor kezdődik a tejfogak fiziológiás gyökérfelszívódása?",
        a: "Öt éves korban",
        b: "Hat éves korban",
        c: "Négy éves korban",
        correct: "a",
    },
    {
        question: "A fluorózis, a fogak egyfajta szerkezeti rendellenességének, okozója:",
        a: "lokális tényezők",
        b: "általános tényezők",
        c: "intoxicatio",
        correct: "a",
    },
    {
        question: "Tejfogak tömésére javasolt anyagok:",
        a: "kompozitok",
        b: "amalgám",
        c: "üvegionomér cementek",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
//const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    //d_text.innerText = currentQuizData.d

    console.log(`currentQuiz: ${currentQuiz}`)

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected()

    if(answer){
        
        console.log(`answer ${answer} -  currentQuiz ${currentQuiz} - quizData[currentQuiz].correct ${ quizData[currentQuiz].correct}`)

        if (answer == quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++
        
        if (currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})