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
question: "Mi a parodontopathia?",
a: "10.	A fogágy betegsége",
b: "11.	A gyökérhártya betegsége",
c: "12.	A gingiva betegsége",
d: "13.	A fogcement betegsége",
correct: "a",
},

{
question: "Gingivitisnek nevezzük a:",
a: "1.	Fogágygyulladást",
b: "2.	Gingivagyulladást",
c: "3.	Szájfenékgyulladást",
d: "4.	Nyelvgyulladást",
correct: "b",
},

{
question: "A herpesz okozója:",
a: "1.	Vírusok",
b: "2.	baktériumok",
c: "3.	Vírusok és baktériumok",
correct: "a",
},

{
question: "Mi a kandidiázis?",
a: "1.	Szájnyálkahártya betegsége",
b: "2.	Fogbetegség",
c: "3.	Gyökérhártya betegsége",
correct: "a",
},

{
question: "Fogágynak nevezzük a:",
a: "1.	Parodonciumot",
b: "2.	Periodonciumot",
c: "3.	Gingivát",
correct: "a",
},

{
question: "A parodontális tasakok mélységét a következő eszközzel határozzuk meg:",
a: "1.	Fogászati szondával",
b: "2.	Kalibrált parodontális mérőszondával",
c: "3.	Heideman spatulával",
correct: "b",
},

{
question: "Mi az ankyloglossia?",
a: "1.	Nyelvpapillák gyulladása",
b: "2.	A nyelv fejlődési rendellenessége",
c: "3.	A nyelv atrófiája",
d: "4.	A nyelv hypertrófiája",
e: "5.	Fekete nyelv",
correct: "b",
},

{
question: "Szupraosszeális tasakoknál a csont resorpció:",
a: "1.	Vertikális",
b: "2.	Nincs csontszövet vesztés",
c: "3.	Horizontális",
correct: "c",
},

{
question: "A parodontopáthia leggyakoribb szövődménye:",
a: "1.	Abscessus parodontalis",
b: "2.	Gingivitis",
c: "3.	Stomatitis herpetica  ",
correct: "a",
},

{
question: "Milyen eszköz a parodontológiában alkalmazott marker?",
a: "1.	A parodontális tasak mélységét meghatározó eszköz",
b: "2.	Fogvizsgálatra alkalmazott eszköz",
c: "3.	Plakk identifikálására alkalmazott eszköz",
correct: "c",
},

{
question: "Mi a halitosis?",
a: "1.	A nyálmirigy megbetegedése",
b: "2.	Gingivostomatitis ulcerosa tünete",
c: "3.	A temporomandibuláris ízület betegsége",
correct: "b",
},

{
question: "Mi a parodontopathia?",
a: "1.	Ínybetegség",
b: "2.	A gyökérhártya betegsége",
c: "3.	Fogágybetegség",
d: "4.	A fogcement betegsége",
correct: "c",
},

{
question: "Mi a gingivitis?",
a: "1.	Gingivagyulladás",
b: "2.	Gyökérhártya-gyulladás",
c: "3.	Fogágygyulladás",
d: "4.	Fogcementgyulladás",
correct: "a",
},

{
question: "Minek a következménye a fogkő képződése?",
a: "1.	A dentális plakk kalcifikációja",
b: "2.	A dentális plakk mineralizációja",
correct: "c",
},

{
question: "A fogkő leggyakoribb elhelyezkedése a felső állcsontban:",
a: "1.	Oldalsó fogak vesztibuláris felülete",
b: "2.	Metszőfogak orális felülete",
c: "3.	Metszőfogak vesztibuláris felülete",
correct: "a",
},

{
question: "A fogkő leggyakoribb elhelyezkedése az alsó állcsontban:",
a: "1.	Metszőfogak és szemfog orális felülete",
b: "2.	Oldalsó fogak vesztibuláris felülete",
c: "3.	Első állandó moláris fogak orális felülete",
correct: "a",
},

{
question: "Mi a gyökérhártya?",
a: "1.	A foggyökeret körülvevő szövet, amely összeköti a fogat az alveolussal",
b: "2.	Fogágy",
c: "3.	Gingívát körülvevő szövet",
correct: "a",
},

{
question: "Mi a gyökérhártya?",
a: "1.	Fogágy",
b: "2.	Kollagén típusú kötőszövet",
c: "3.	a dentin és cement között elhelyezkedő kötőszövet",
correct: "b",
},

{
question: "A gyökérhártya rostok tulajdonságai:",
a: "1.	Nem elasztikusak, rágóerőből származó erő hatására nem tágulnak ki, hullámosak, és nem feszülnek",
b: "2.	Elasztikusak, rágóerő hatására kitágulnak, nem hullámosak, és feszülnek",
c: "3.	Nem elasztikusak, de rágóerő hatására kitágulnak, hullámos a lefutásuk, és feszülnek",
correct: "a",
},

{
question: "Hogy nevezzük az ajkak piros részének megbetegedését?",
a: "1.	Cheilitis exfoliativa",
b: "2.	Gingivitis catarrhalis",
c: "3.	Aphth",
d: "4.	Lingua nigra",
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
  
      numberOfAnswers = Object.keys(quizData[currentQuiz]).length - 2
      console.log("Number of answers: ", numberOfAnswers)
      switch(numberOfAnswers){  
        case 2:
              c_text.parentElement.style.display = 'none'
              d_text.parentElement.style.display = 'none'
              e_text.parentElement.style.display = 'none'
              f_text.parentElement.style.display = 'none'
              break;  
          case 3:
              c_text.parentElement.style.display = ''
              d_text.parentElement.style.display = 'none'
              e_text.parentElement.style.display = 'none'
              f_text.parentElement.style.display = 'none'
              c_text.innerText = currentQuizData.c
              break;
          case 4:
              c_text.parentElement.style.display = ''
              d_text.parentElement.style.display = ''    
              e_text.parentElement.style.display = 'none'
              f_text.parentElement.style.display = 'none'
              c_text.innerText = currentQuizData.c
              d_text.innerText = currentQuizData.d
              break;
          case 5:
              c_text.parentElement.style.display = ''
              d_text.parentElement.style.display = ''    
              e_text.parentElement.style.display = ''
              f_text.parentElement.style.display = 'none'
              c_text.innerText = currentQuizData.c
              d_text.innerText = currentQuizData.d
              e_text.innerText = currentQuizData.e
              break;
          case 6:
              c_text.parentElement.style.display = ''
              d_text.parentElement.style.display = ''    
              e_text.parentElement.style.display = ''
              f_text.parentElement.style.display = ''
              c_text.innerText = currentQuizData.c
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
