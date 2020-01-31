console.log(questions);

/*
  on page load: 
    show game start screen
    include how to play instructions
    add start quiz button
    
  on start button click:
    hide game-start div 
    show questions div
    show question
    start timer
  on answer selection:
    check to see if answer is correct
    if correct:
      display success message
      add to score
      show next question
    if incorrect:
      display fail message
      deduct time from timer
      show next question
  for game end:
    if all the questions have been answered:
      display score
      prompt to save initials and results
      on save:
        record results in local storage
    if time runs out:
      display score
      prompt to try again
*/
//1. get the display fx on correctly
//2.make sure you can grab the correct value when user onlicks (b value = the correct b value)
//3. making sure you have a logic statmt or fx to evalueate if choice ==answer (fx)
// functions:
//this gets triggered when you hit the start btn
//1*
function startGame(){

  // on start button click:
  // hide game-start div 
  // show questions div
  // show question
  // start timer
  $(".btn").click(function(){
    $("jumbotron").hide;
  });
}

function resetGame(){

}

function endGame(){
  //display scores
  ////btn to call restartgame
  //check scores against highscore (localstorage),
  //if scores>highscore (localstorage), update score and name (via local storage)

}


function startTimer(){

}

//will need a stop time

//reset timer (when game is over)

function decrementTimer(){
  //timer-=5;

}
//2*
function renderQuestion(){

  //start timer
}
//3*
function checkAnswer(/*choices*/){
  //stop the time


//check if true
//wins++;
//updated the display for wins
//if false
//lose++;
//decrement timer
//update lose score

//i++;

}

function highScore(){

}

function clearScores(){

}


//remember to do an onlick trigger for startGame() for the resetbtn and startbtn class="start"









































/*
  on page load: 
    show game start screen
    include how to play instructions
    add start quiz button
    
  on start button click:
    hide game-start div 
    show questions div
    show question
    start timer
  on answer selection:
    check to see if answer is correct
    if correct:
      display success message
      add to score
      show next question
    if incorrect:
      display fail message
      deduct time from timer
      show next question
  for game end:
    if all the questions have been answered:
      display score
      prompt to save initials and results
      on save:
        record results in local storage
    if time runs out:
      display score
      prompt to try again
*/
/*
  functions:
    startGame()
    resetGame()
    endGame()
    restartGame()
    startTimer()
    decrementTimer()
    renderQuestion()
    checkAnswer()
    saveScore()
    clearScores()
    toggleScores()
*/

let timer = 60;
let score = 0;
let player = '';
let qIndex = 0;

function startGame() {
  // /**
  //  hide game-start div
  $("#game-start").hide;
  //  show questions div
  $("#questions").show;
  startTimer();
  //  */
}

function resetGame(score, timer) {
  // /**
  //  hide questions div
  $("#questions").hide;
  //  show game-start div
  $("#game-start").show;
  //  set score back to 0
  score;
  //  set timer back to initial value
  timer;
  //  */
}

function restartGame() {
  // /**
  //  call resetGame()
  resetGame();
  //  call startGame
  startGame();
  //  */
}

/**
 if questions.length-1 is equal to qIndex
 call endGame function
 */
if(questions.length - 1 === qIndex) {
  endGame();
}

 function endGame() {
  //  /**
  //   hide questions div
  $("#questions").hide;
  //   show end-game div
  $("#end-game").show;
  //     show buttons for save score, clear scores, and restart quiz
  //   display score
  //   ask for name input
  //   */
 }

 function startTimer() {
  //  /**
  let count = 60, timer = setInterval(function() {
    $("#counter").html(count--);
    if(count == 1) clearInterval(timer);
}, 1000);
  //   decrement time by 1 every 1000 ms
  //   if timer <= 0:
  //     clear interval
  //     set timer to 0
    endGame();
  //   */
 }

 function decrementTimer() {
  //  /**
  //   subtract 5 from timer

  //   display penalty message
  alert("Incorrect");
  //   */
 }

 function renderQuestion() {
  //  /**
  //   grab questions[qIndex] from questions array
  questions[qIndex]
  //   create html element for title
  $(".questions").html("<h1>Questions</h1>");
  

  //   append to page
  //   loop through choices array
  
  //   create html element for each choice
  //   append choices to page
  //   */
 }

 /**
  add event listener to choices
  call this function upon clicking on a choice
  */

  function checkAnswer() {
    // /**
    //  grab value of the chosen answer
    //  compare it to the actual answer
    //  if correct:
    //   increment the score
    //   increment qIndex
    //   call renderQuestion()
    // if incorrect:
    //   call decrementTimer()
    //   increment qIndex
    //   call renderQuestion()
    //  */
  }

  function saveScore() {
    // /**
    //  capture input value for name
    //  save name and score in a new object
    //  push new object into local storage array
    //  display high-scores di
    //  */
  }

  function clearScores() {
    // /**
    //  delete all names and scores from local storage
    Storage.clear();
    //  display high-scores div
    $("#high-scores").show;
    //  */
  }

  function toggleScores() {
    // /**
    //  if hidden:
    //   grab scores from local storage
    //   sort scores from high to low
    //   append to high-scores div
    //   show high-scores div
    // if visible:
    //   hide high-scores div
    //  */
  }