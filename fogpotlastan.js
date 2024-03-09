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
question: "Mi a habituális okklúzió?",
a: "1.	süllyedt harapás",
b: "2.	megemelt harapás",
c: "3.	az élet folyamán kialakult, szerzett harapás",
correct: "c",
},

{
question: "Öntött fémcsapot készítünk:",
a: "1.	vitális fogakra",
b: "2.	nemvitális fogakra",
c: "3.	vitális és nemvitális fogakra",
correct: "b",
},

{
question: "Mit jelent a teljes kivehető lemezes fogpótlás alaplemezének a reparatúrája?",
a: "1.	az alaplemez törésének a javítása",
b: "2.	kitört fog pótlása",
c: "3.	alaplemez alábélelése",
correct: "a",
},

{
question: "A hídtestnek a fogatlan gerinchez való viszonyulása lehet:",
a: "1.	vonalszerű",
b: "2.	felületi",
c: "3.	alámosható",
correct: "b",
},

{
question: "A Kennedy-féle osztályozásban a Kennedy I. osztályba tartozik:",
a: "1.	kétoldali sorvégi foghiány",
b: "2.	sorközi foghiány a laterális fogak tájékán",
c: "3.	egyoldali sorvégi foghiány",
correct: "a",
},

{
question: "A Kennedy-féle osztályozásban a Kennedy IV. osztályba tartozik:",
a: "1.	egyoldali sorvégi foghiány",
b: "2.	sorközi foghiány a frontfogak tájékán",
c: "3.	sorközi foghiány a laterális fogak tájékán",
correct: "b",
},

{
question: "A teljes kivehető lemezes fogpótlás szélei elhelyezendők:",
a: "1.	Alapjával feszesen összenőtt nyálkahártya területén",
b: "2.	Elmozdítható nyálkahártya területén",
c: "3.	Elmozduló nyálkahártya területén",
correct: "b",
},

{
question: "A harapás magasságának meghatározásához szükséges:",
a: "1.	Sellak alaplemez",
b: "2.	Harapási sablon",
c: "3.	Rózsaszín viaszlemez",
d: "4.	Mandzsetta (Keller-csík)",
correct: "b",
},

{
question: "Cink-oxid eugenol paszta elkészítésekor a tubusokból:",
a: "1.	Egyforma vastagságú anyagot nyomunk ki",
b: "2.	Egyforma hosszúságú anyagot nyomunk ki",
c: "3.	Egyforma mennyiségű anyagot nyomunk ki",
correct: "b",
},

{
question: "Az ideiglenes koronák rögzítéséhez alkalmazzuk a/az:",
a: "1.	Üveg-ionomér cementet",
b: "2.	Cink-foszfát cementet",
c: "3.	Cink-oxid készítményeket",
correct: "c",
},

{
question: "A betét direkt úton történő modellálása a következőket tartalmazza:",
a: "1.	A betétet önkötő akriláttal vagy viasszal a szájban modelláljuk",
b: "2.	A betétet önkötő akrilátból vagy viaszból a gipszmintán modelláljuk",
c: "3.	A betétet a szájban termoplasztikus anyagból modelláljuk ",
correct: "a",
},

{
question: "A Jacket-koronához a demarkációs vonalr:",
a: "1.	Tangenciális",
b: "2.	Szögletes váll",
c: "3.	lekerekített váll",
correct: "b",
},

{
question: "Milyen mintát kapunk a funkciós lenyomat alapján?",
a: "1.	Anatómiai minta",
b: "2.	Funkciós minta",
c: "3.	Dublírozott mestermodell- munkaminta",
correct: "b",
},

{
question: "Elasztomérek elkészítésekor az alap-, és aktivátor paszta tubusokból:",
a: "1.	Egyforma hosszúságú anyagot nyomunk ki",
b: "2.	Az alap és aktivátor paszta aránya 8",
c: "3.	Az aktivátor pasztát a megefelelő kanállal és alapanyaggal készített lenyomat szerint mérjük 1",
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
              d_text.parentElement.style.display = ''    
              e_text.parentElement.style.display = 'none'
              f_text.parentElement.style.display = 'none'
              d_text.innerText = currentQuizData.d
              break;
          case 5:
              d_text.parentElement.style.display = ''    
              e_text.parentElement.style.display = ''
              f_text.parentElement.style.display = 'none'
              d_text.innerText = currentQuizData.d
              e_text.innerText = currentQuizData.e
              break;
          case 6:
              d_text.parentElement.style.display = ''    
              e_text.parentElement.style.display = ''
              f_text.parentElement.style.display = ''
              d_text.innerText = currentQuizData.d
              e_text.innerText = currentQuizData.e
              f_text.innerText = currentQuizData.f
              break;
          default:
              break;
      }
      
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
