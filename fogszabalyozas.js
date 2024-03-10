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
    question: "A rachitis olyan betegség, amelyet a:",
    a: "1.	A vitamin hiánya okoz",
    b: "2.	B vitamin hiánya okoz",
    c: "3.	C vitamin hiánya okoz",
    d: "4.	D vitamin hiánya okoz",
    e: "5.	E vitamin hiánya okoz",
    correct: "d",
    },
    
    {
    question: "Az első fiziológiás harapásemelés a következő fog áttörésével jön létre:",
    a: "1.	Első tej moláris",
    b: "2.	Második tej moláris",
    c: "3.	Első maradó moláris",
    d: "4.	Második maradó moláris",
    e: "5.	Első és második kisőrlő fogak",
    correct: "a",
    },
    
    {
    question: "A második fiziológiás harapásemelés a következő fog áttörésével jön létre:",
    a: "1.	Első tej moláris",
    b: "2.	Második tej moláris",
    c: "3.	Első maradó moláris",
    d: "4.	Második maradó moláris",
    e: "5.	Első és második kisőrlő fog",
    correct: "c",
    },
    
    {
    question: "A pubertáskor előtti szakaszban a növekedési hormon túltermelődése a következő betegséghez vezet:",
    a: "1.	Hipofízis nanizmus",
    b: "2.	Gigantizmus",
    c: "3.	Akromegália",
    d: "4.	Ajak-és szájpadhasad",
    e: "5.  Down-szindróma",
    correct: "b",
    },
        
    {
    question: "A pubertáskor utáni szakaszban a növekedési hormon túltermelődése a következő betegséghez vezet:",
    a: "1.	Hipofízis nanizmus",
    b: "2.	Gigantizmus",
    c: "3.	Akromgália",
    d: "4.	Ajak-és szájpadhasadék",
    e: "5.	Down-szindróma",
    correct: "c",
    },
    
    {
    question: "Felharaptató sánccal a következő harapási rendellenességet kezeljük:",
    a: "1.	disztális harapást",
    b: "2.	meziális harapást",
    c: "3.	mélyharapást",
    d: "4.	nyitott harapást",
    e: "5.	keresztharapást",
    correct: "c",
    },
    
    {
    question: "Előre haraptató sánccal a következő harapási rendellenességet korrigáljuk:",
    a: "1.	meziális harapást",
    b: "2.	disztális harapást",
    c: "3.	mélyharapást",
    d: "4.	nyitott harapást",
    e: "5.  keresztharapást",
    correct: "b",
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
