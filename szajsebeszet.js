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
    question: "A nem felszívódó suturákat eltávolítjuk:",
    a: "1.	2. nap után",
    b: "2.	7. nap után",
    c: "3.	nem távolítjuk el",
    correct: "a",
    },
    
    {
    question: "Rizikócsoportba nem tartozó páciensek:",
    a: "1.	szív-érrendszeri betegségekben szenvedők",
    b: "2.	leukémiás betegek",
    c: "3.	hemofíliás betegek",
    d: "4.	cukorbetegek",
    e: "5.	gasztritiszes betegek",
    correct: "a",
    },
    
    {
    question: "Mi a torus palatinus",
    a: "1.	Maxilláris cysta",
    b: "2.	Keményszájpad gyulladás",
    c: "3.	Keményszájpad csontos megnagyobbodása",
    d: "4.	N.glosspharingeus parézis",
    e: "5.	N.facialis parézis",
    correct: "a",
    },
    
    {
    question: "A cysták kezelhetőek:",
    a: "1.	konzervatívan",
    b: "2.	műtéttel",
    c: "3.	konzervatívan és műtéttel",
    correct: "a",
    },
    
    {
    question: "Melyik ideget érzéstelenítjük az alsó állcsontban alkalmazott vezetéses érzéstelenítéssel",
    a: "1.	Nervus infraorbitalis",
    b: "2.	Tuber érzéstelenítés",
    c: "3.	Nervus palatinus scarpe",
    d: "4.	Nervus palatinus anterior",
    e: "5.	Nervus mandibularis",
    correct: "a",
    },
    
    {
    question: "Tranzitórikus bacteremia a baktériumok átterjedése a:",
    a: "1.	lágy szövetekbe",
    b: "2.	vérbe",
    c: "3.	szövetekbe, ahol gennyes gócot képeznek",
    d: "4.	vérbe, ahol szaporodnak, és abscessust alkotnak",
    correct: "a",
    },
    
    {
    question: "A fogat, amely nem tört elő:",
    a: "1.	impaktált fognak nevezzük",
    b: "2.	retrudált fognak nevezzük",
    c: "3.	protrudált fognak nevezzük",
    d: "4.	extrudált fognak nevezzük",
    e: "5.	intrudált fognak nevezzük",
    correct: "a",
    },
    
    {
    question: "Cruer -emelők alkalmazásával távolítható el a foggyökér a/az:",
    a: "1.	felső állcsontból",
    b: "2.	alsó állcsontból",
    c: "3.	felső és alsó állcsontból",
    correct: "a",
    },
    
    {
    question: "Extraorális incisió esetén a drainálás során alkalmazunk:",
    a: "1.	gumi drain",
    b: "2.	jodoformos csík",
    c: "3.	papírcsúcs",
    d: "4.	Müller-tűk",
    e: "5.	guttapercha",
    correct: "a",
    },
    
    {
    question: "A fog eltávolításakor az ínyleválasztást a következő műszerekkel végezzük:",
    a: "1.	Fogókkal",
    b: "2.	Emelőkkel",
    c: "3.	Kürettákkal",
    d: "4.	Pincettával",
    e: "5.	Fogászati tükörrel",
    f: "6.	Szondával",
    correct: "a",
    },
    
    {
    question: "Felső molárisok eltávolítására alkalmazunk:",
    a: "1.	terminális érzéstelenítést",
    b: "2.	felületes érzéstelenítést",
    c: "3.	vezetéses mandibuláris érzéstelenítést",
    d: "4.	inhalációs érzéstelenítést",
    correct: "a",
    },
    
    {
    question: "Melyik  fogakat távolítjuk el  az osztott csőrvégű moláris fogópárral ?",
    a: "1.	felső molárisokat",
    b: "2.	alsó molárisokat",
    c: "3.	felső praemolárisokat",
    d: "4.	alsó praemolárisokat",
    correct: "a",
    },
    
    {
    question: "Luer-fogót alkalmazunk:",
    a: "1.	molárisok eltávolítására",
    b: "2.	csont nivellálásra",
    c: "3.	praemolárisok eltávolítására",
    d: "4.	szemfog eltávolítására",
    correct: "a",
    },
    
    {
    question: "Mit jelent a sinus maxillaris aperta fogalom?",
    a: "1.	arcüreggyulladás",
    b: "2.	oroantralis kommunikáció (nyílt arcüreg)",
    c: "3.	arcüreg cysta",
    d: "4.	orr eredetű gyulladás az arcüregben",
    correct: "a",
    },
    
    {
    question: "Az impaktált fog olyan fog, amely:",
    a: "1.	a fogíven kívül tört elő",
    b: "2.	nem tört elő, valamilyen etiológiai tényező miatt",
    c: "3.	nem tört elő, csírahiány miatt",
    correct: "a",
    },
    
    {
    question: "A következő feladatban be kell karikázni több pontatlan válasz előtti számot. Adrenalin és noradrenalin _____ nem:",
    a: "1.	helyi érzéstelenítők",
    b: "2.	helyi érszűkítő szerek",
    c: "3.	inhalációs érzéstelenít",
    correct: "a",
    },
];

quizData = shuffle(quizData);

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const f_text = document.getElementById('f_text')
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

    numberOfAnswers = Object.keys(quizData[currentQuiz]).length - 2
    console.log("Number of answers: ", numberOfAnswers)
    switch(numberOfAnswers){    
        case 3:
            d_text.parentElement.style.display = 'none'
            e_text.parentElement.style.display = 'none'
            f_text.parentElement.style.display = 'none'
            break;
        case 4:
            d_text.parentElement.style.display = 'block'    
            e_text.parentElement.style.display = 'none'
            f_text.parentElement.style.display = 'none'
            console.log("---- Number of answers: ", numberOfAnswers)
            d_text.innerText = currentQuizData.d
            break;
        case 5:
            d_text.parentElement.style.display = 'block'    
            e_text.parentElement.style.display = 'block'
            f_text.parentElement.style.display = 'none'
            d_text.innerText = currentQuizData.d
            e_text.innerText = currentQuizData.e
            break;
        case 6:
            d_text.parentElement.style.display = 'block'    
            e_text.parentElement.style.display = 'block'
            f_text.parentElement.style.display = 'block'
            d_text.innerText = currentQuizData.d
            e_text.innerText = currentQuizData.e
            f_text.innerText = currentQuizData.f
            break;
        default:
            break;
    }
    
    
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