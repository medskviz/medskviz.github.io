function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let quizData = [
    {
        question: "A mesiodens olyan fog,amely:",
        a: "1.	tipikus,és a felső tejmoláris fog régióban jelentkezik",
        b: "2.	atipikus,és a felső nagymetszők között jelentkezik",
        c: "3.	atipikus,és az alsó nagymetsző régióban jelentkezik",
        correct: "a",
        },
        
        {
        question: "Mikor kezdődik a tejfogak fiziológiás gyökérfelszívódása?",
        a: "1.	Öt éves korban",
        b: "2.	Hat éves korban",
        c: "3.	Négy éves korban",
        correct: "a",
        },
        
        {
        question: "A fluorózis, a fogak egyfajta szerkezeti rendellenességének, okozója:",
        a: "1.	lokális tényezők",
        b: "2.	általános tényezők",
        c: "3.	intoxicatio",
        correct: "a",
        },
        
        {
        question: "Tejfogak tömésére javasolt anyagok:",
        a: "1.	kompozitok",
        b: "2.	amalgám",
        c: "3.	üvegionomér cementek",
        correct: "a",
        },
        
        {
        question: "A tejfogak szuvasodásának gyors lefolyása a következő tényezők  következménye:",
        a: "1.	túlzott cukorbevitel",
        b: "2.	vékony zománc-dentin réteg",
        c: "3.	tökéletlen szájhigiéné",
        correct: "a",
        },
        
        {
        question: "A barázdazárás ellenjavallatai:",
        a: "1.	kezdődő szuvas cavitas a barázdában",
        b: "2.	mély barázda",
        c: "3.	elszíneződött barázda",
        correct: "a",
        },
        
        {
        question: "Mik a folyékony linerek?",
        a: "1.	egyfajta alábélelő anyag",
        b: "2.	barázdazáró anyag",
        c: "3.	a tömés fölé helyezendő anyagok",
        correct: "a",
        },
        
        {
        question: "Mi a legfontosabb a cirkuláris caries kezelésében?",
        a: "1.	a szuvas laesio ellátása",
        b: "2.	a rossz szokások kiküszöbölése",
        c: "3.	fluoridlakkos ecsetelés",
        correct: "a",
        },
        
        {
        question: "A caries profundánál a fájdalom:",
        a: "1.	spontán",
        b: "2.	inger hatására jelentkezik, az inger elmúltával megszűnik a fájdalom",
        c: "3.	inger hatására jelentkezik, az inger elmúltával a fájdalom megmarad",
        correct: "a",
        },
        
        {
        question: "A kavitás tisztítására és fertőtlenítésére alkalmazunk:",
        a: "1.	gyári készítményt",
        b: "2.	70% -os alkoholt",
        c: "3.	klór-fenol kámfort",
        correct: "a",
        },
        
        {
        question: "Mi a linea neonatalis?",
        a: "1.	zománc-dentin határ",
        b: "2.	születési vonal",
        c: "3.	Nasmyth-membrán",
        correct: "a",
        },
        
        {
        question: "A tejfogak vitális amputációjánál alkalmazunk:",
        a: "1.	ürisan pasztát",
        b: "2.	kálcium-hidroxid pasztát",
        c: "3.	cink-oxid eugenol pasztát",
        correct: "a",
        },
        
        {
        question: "A tejfogak mortális amputációjához alkalmazunk:",
        a: "1.	trisan pasztát",
        b: "2.	kálcium-hidroxid pasztát",
        c: "3.	cink-oxid eugenol pasztát",
        correct: "a",
        },
        
        {
        question: "A zománcrepedést más néven:",
        a: "1.	zománc lamellának nevezzük",
        b: "2.	infractió-nak nevezzük",
        c: "3.	extrusió-nak nevezzük",
        correct: "a",
        },
        
        {
        question: "Az avulzió olyan traumatikus sérülés, amelynél:",
        a: "1.	a fog részlegesen kimozdul, de marad az alveolusban",
        b: "2.	a fog a hosszanti tengely irányában benyomódik a fogmederbe",
        c: "3.	a fog teljesen kimozdul az alveolusból",
        correct: "a",
        },
        
        {
        question: "Dentes praedecidui/veleszületett fogak",
        a: "1.	túl korán előtört tejfogak",
        b: "2.	a fogléc fejletlen burjánzásai",
        c: "3.	számfeletti tejfogak",
        correct: "a",
        }
];

quizData = shuffle(quizData);

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