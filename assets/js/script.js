var startButton = document.querySelector(".start-button");
var timeDisplay = document.getElementById('timer')
var timeView= document.querySelector(".time-viewed")
var questionsDiv = document.getElementById('questions')
var answer = document.getElementById('answer')
var results = document.getElementById('results')
var timerInterval;
var startPage = document.querySelector("#startPage")
var questionIndex = 0





// Timer will start counting down once the Start Quiz button is pressed

var timerCount = 90;

function timer (){
    
    
       
          timerCount--;
          timeDisplay.textContent = timerCount; 
          
          if (timerCount===0) {
              clearInterval(timerInterval);
              
}
  
        
  }
// function that will start the quiz
  function startGame () {
    console.log ("startTime")
    timerInterval=setInterval(timer, 1000)
  timeView.textContent= timerCount
  startPage.setAttribute("class","hide") 
  questionsDiv.removeAttribute("class")
  callQuestions()
}

// This is my code to call my quiz question.
function callQuestions () {
var currentQuestion= questions [questionIndex]
answer.textContent=currentQuestion.question
results.innerHTML=""
currentQuestion.answer.forEach(function(answerChoice){
    var answerButton=document.createElement("button")
    answerButton.textContent=answerChoice
    answerButton.setAttribute("value",answerChoice)
answerButton.onclick=checkAnswer
    results.append(answerButton)
})
}
function checkAnswer (){
    //  if user guessed wrong then penalty will take place
if (this.value !== questions[questionIndex].results) {
    // penalize time
    timerCount -= 15;
    
    if (timerCount < 0) {
    timerCount = 0;
    }
    
    
    timeView.textContent = timerCount;
    
    console.log("Wrong")
    } else {
    
    console.log("Correct")
    }
    
    
    // move to next question
    questionIndex++;
    
    //  if we've run out of questions
    if (questionIndex === questions.length) {
    //quizEnd();
    } else {
     callQuestions();
    }
    }


// My array of questions!

var questions = [
    {
    question: "Arrays in JavaScript can be used to store?",

    answer:[ "Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
   results: "All of the Above",
},
{
    question: "The condition in an if / else statement is enclosed with?",
    answer:[  "Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
    results: "Parenthesis",
},

{
    question: "Inside swhich HTML element do we put JavaScript?",
    answer: ["<scripting>", "<js>"," <script>", "<javascript>"],
    results: "<script>"
}
]



startButton.addEventListener ("click", startGame); 
















