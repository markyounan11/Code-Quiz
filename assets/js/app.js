// console.log(questions);
// /*
//   on page load: 
//     show game start screen
//     include how to play instructions
//     add start quiz button

//   on start button click:
//     hide game-start div 
//     show questions div
//     show question
//     start timer
//   on answer selection:
//     check to see if answer is correct
//     if correct:
//       display success message
//       add to score
//       show next question
//     if incorrect:
//       display fail message
//       deduct time from timer
//       show next question
//   for game end:
//     if all the questions have been answered:
//       display score
//       prompt to save initials and results
//       on save:
//         record results in local storage
//     if time runs out:
//       display score
//       prompt to try again
// */
// /*
//   functions:
//     startGame()
//     resetGame()
//     endGame()
//     restartGame()
//     startTimer()
//     decrementTimer()
//     renderQuestion()
//     checkAnswer()
//     saveScore()
//     clearScores()
//     toggleScores()
// */

// let timer = 60;
// let score = 0;
// let player = '';
// let right = 0;
// let wrong = 0;
// // $timer = document.querySelector('.time');
// let shuffledQuest, qIndex;
// $('.start-button').click(function () {
//   $('#header').toggle();
//   $('#finish-game').hide();
//   $('#game-view').show();
//   // $('#finish-game').hide();
//   // shuffledQuest = questions.sort(() => Math.random( - .5));
//   qIndex = 0;
//   //once you start your question to the first
//   //start time
//   setTime();
//   renderQuestions();
//   console.log(renderQuestions);
//   // setTime();
// });

// // set timer
// // set timer
// function setTime(){
//     let timeInterval = setInterval(function(){
//       timer--;
//       $('#timer').html(timer);
//       console.log(timer);

//       //what is our other cond when we what to stop time
//       //if all questions have been answered
//       //(how do we know we are at the end?)
//       if (qIndex === questions.length) {
//         clearInterval(timeInterval);
//         //game is is out of time, game ends
//         //alert out of time
//         alert("out of time");
//         //display via html the results
//         displayResults()
//       }

//       //if time is zero
//       if(timer === 0) {
//         //clear the time / stop time
//         clearInterval(timeInterval);
//         //game is is out of time, game ends
//         //alert out of time
//         alert("out of time");
//         //display via html
//         displayResults()

//       }
//     }, 1000);}

// function renderQuestions() {
//   // showQuestion(shuffledQuest[qIndex])
//   if (qIndex === questions.length) {
//     displayResults()
//   }
//   else if (qIndex < questions.length) {


//     console.log(qIndex);
//     $('.questions').text(questions[qIndex].title)
//     $('.choices').empty();
//     for (let i = 0; i < 4; i++) {
//       $('.choices').append(`<button class='options' data-val='${questions[qIndex].choices[i]}' 
//     data-answer='${questions[qIndex].answer}'> ${questions[qIndex].choices[i]}</button>`)
//     }

//     if (qIndex <= questions.length - 1) {
//       qIndex++
//     }
//     // else {
//     //   displayResults()

//     // }
//   }
// }

// // function showQuestion(question) {

// // }
// // console.log(startGame);

// function displayResults() {
//   console.log('displayResults')

//   $('#game-view').hide();
//   $('#finish-game').show();
//   $('.high-scores').html(`<h2 id = "rightAnswer">Correct Answers: ${right}</h2>
//   <h2>Wrong Answers: ${wrong}</h2>`)
// }
// $('.choices').on('click', '.options', function (event) {
//   event.preventDefault()
//   var answer = $(this).attr('data-answer')
//   var buttons = $(this).attr('data-val')
//   if (answer === buttons) {
//     right++
//   }
//   else {
//     wrong++
//   }
//   renderQuestions()
// })
// //1.create onlick clear btn
// $('#clear').on('click', function (event) {
//   event.preventDefault()
//   //3. whatever action you need to do (update whatever) 
//   // if complex console.log to verify changes are correct
//   right = 0;
//   //4. stick to html to see visible changes () 
//   //either dynamically updated or update location with updates
//   $('.high-scores').html(`<h2 id = "rightAnswer">Correct Answers: ${right}</h2>`);
//   //2. verify onclick works
//   alert("Score has been cleared!");
// })

// //in save function, make sure you have a score array to save scores
// //A. check if current score is high score, if so update local storage
// //B. add the current score to  the score array






























// Data to be used
  var state = {
  currentQuestion: 0,
  remainingTime: questions.length * 15, // from questions.js file
  timer: 0,
  timeOut: 0,
  timePenalty: 15,
  highScores: [] // [{initials: , score: }]
}
// Initiating func
function init() {
  // Get data from localStorage
  var fromLocal = localStorage.getItem('highScores');
  if (fromLocal) { state.highScores = JSON.parse(fromLocal); }
  // Initiate page
  document.querySelector('#intro').setAttribute('style', 'display:block;');
  document.querySelector('#scores').setAttribute('style', 'display:none;');
  // Initiate data
  state.currentQuestion = 0;
  state.remainingTime = questions.length * 15;
  state.timer = 0;
  state.timeOut = 0;
  document.querySelector('#time__num').innerText = state.remainingTime;
}
// Questions page(get one key-value set of question as a param)
function quizRender(data) {
  document.querySelector('#quiz').setAttribute('style', 'display:block;');
  // Render heading
  var question = "<h2>" + data.title + "</h2>"
  document.querySelector('.quiz__title').innerHTML = question;
  // Render buttons
  // 1. Delete previous question's btns
  var choicesDOM = document.querySelector('.quiz__choices');
  deleteChild(choicesDOM); // Func deleting all children
  // 2. Create btns
  for (var i = 0; i < data.choices.length; i++) {
    var choice = document.createElement('button');
    choice.innerText = (i + 1) + '. ' + data.choices[i];
    choice.classList.add("choiceBtn", "btn", "btn-success"); // classes for style, bootstrap
    // Set data attr to check the correct answer later
    var answer = (data.answer === data.choices[i]) ? "correct" : "wrong";
    choice.setAttribute('data-answer', answer);
    choicesDOM.appendChild(choice);
  }
}
// Timer & Timeout
function timerFunc() {

  // Func clearing timer and timeout that previously executed and currently running
  clearTime();
  var timeDOM = document.querySelector('#time__num');
  timeDOM.innerText = state.remainingTime;

  state.timer = setInterval(function () {
    state.remainingTime--;
    timeDOM.innerText = state.remainingTime; // countdown
  }, 1000)
  state.timeOut = setTimeout(function () {
    clearInterval(state.timer);
    result(); // func rendering result page
  }, state.remainingTime * 1000)
}
// Result page
function result() {

  document.querySelector('#quiz').setAttribute('style', 'display:none;');
  document.querySelector('#result').setAttribute('style', 'display:block;');
  document.querySelector('.result__score').innerText = state.remainingTime;
  clearInterval(state.timer);
}
// Render highscores page
function renderHighScores() {
  // 1. Sort scores(high score -> low score)
  state.highScores.sort(function (a, b) { return b.score - a.score });
  // 2. Delete all remaining scores that previously printed in page
  var scoresDOM = document.querySelector('#scores__ranking');
  deleteChild(scoresDOM);

  // 3. Newly render
  state.highScores.forEach(function (el, i) {
    var rank = document.createElement('p')
    rank.innerText = (i + 1) + ". " + el.initials + " - " + el.score;

    scoresDOM.appendChild(rank);
  });
}
// Render 'right' or 'correct' notification(get a param for a word saved as data attr in each choice DOM)
function verdict(word) {
  document.querySelector('#verdict__word').innerText = word;
  document.querySelector('#verdict').setAttribute('style', 'opacity:1;');
  setTimeout(function () {
    document.querySelector('#verdict').setAttribute('style', 'opacity:0;');
  }, 1000);
}
// Utility - delete children
function deleteChild(DOM) {
  if (DOM.children) {
    Array.from(DOM.children).forEach(function (el) { el.remove(); });
  }
}
// Utility - clear timer and timeout
function clearTime() {
  if (state.timer > 0) { clearInterval(state.timer); }
  if (state.timeOut > 0) { clearTimeout(state.timeOut); }
}
/****************************
 BUTTONS & EVENT HANDLER
*****************************/
// Start quiz button
document.querySelector('#startBtn').addEventListener('click', function (e) {
  // 1. Hide intro section
  document.querySelector('#intro').setAttribute('style', 'display: none;')
  // 2. Quiz render
  quizRender(questions[state.currentQuestion]);
  // 3. Start timer
  timerFunc();
});
// Question's each choice btn
document.querySelector('.quiz__choices').addEventListener('click', function (e) {

  // 1. Check if answer is wrong
  if (e.target.getAttribute('data-answer') !== "correct") {
    state.remainingTime -= state.timePenalty;
    timerFunc();
    verdict("Wrong!");
  }
  else {
    verdict("Correct!");
  }
  // 2. Move to next question
  state.currentQuestion++;
  // 3. When there is remaining question
  if (state.currentQuestion < questions.length) {
    quizRender(questions[state.currentQuestion]);
  }
  else {
    result();
    clearTimeout(state.timeOut);
  }

})
// Submit btn 
  document.querySelector('#submitBtn').addEventListener('click', function () {
  document.querySelector('#result').setAttribute('style', 'display:none;');
  document.querySelector('#scores').setAttribute('style', 'display:block;');
  // 1. Save user's info to state data obj & localStorage
  var currentScore = {};
  currentScore.initials = document.querySelector('#initials').value;
  currentScore.score = state.remainingTime;

  state.highScores.push(currentScore);
  localStorage.setItem('highScores', JSON.stringify(state.highScores));
  // 2. Render highscores page
  renderHighScores()
});
// Go back & Clear Highscores btns
document.querySelector('.scores__btn').addEventListener('click', function (e) {
  // 1. Go back btn
  if (e.target.matches('#gobackBtn')) {
    init();
  }
  // 2. Clear Highscores btn
  else if (e.target.matches('#clearBtn')) {
    // a. Delete state data obj
    state.highScores = [];

    // b. Clear rendered score list
    var scoresDOM = document.querySelector('#scores__ranking');
    deleteChild(scoresDOM);

    // c. Clear localStorage
    localStorage.removeItem('highScores');
  }
});
// View highscores button
  document.querySelector('#viewScores').addEventListener('click', function () {
  document.querySelector('#result').setAttribute('style', 'display:none;');
  document.querySelector('#quiz').setAttribute('style', 'display:none;');
  document.querySelector('#intro').setAttribute('style', 'display:none;');
  document.querySelector('#scores').setAttribute('style', 'display:block;');

  // Clear time when clicked while proceeding quiz
  clearTime();
  renderHighScores();
});
init();