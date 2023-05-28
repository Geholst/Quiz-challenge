//setting up all variables
var timeEl = document.querySelector(".timer");
var clickBtn = document.querySelector("#play-button");
var questionh1 = document.querySelector("h1");
var box1text = document.querySelector(".box1");
var box2text = document.querySelector(".box2");
var box3text = document.querySelector(".box3");
var box4text = document.querySelector(".box4");
var myScore = document.querySelector(".score");
var scoreForm = document.querySelector(".card");
var main = document.querySelector("main");
var playerName = document.querySelector("#name-text");
var nameFill = document.querySelector("#name-form");
var playerTotal = document.querySelector("#name-list");
var highScoreTotal = document.querySelector("#name-count");
// Global variables
var names = [];
var secondsLeft = 300;
var score = secondsLeft;
var timerInterval;
var startQuiz = false;
var intervalId = setInterval(updateCounter, 1000);
var i = 1;
var endTime = 0;

//all questions and answers
var quiz = {
  q1: {
    question1: "Commonly used data types do NOT include:",
    answers1: ["Booleans", "Alerts", "Strings", "Numbers"],
    correct1: "Booleans",
  },
  q2: {
    question2: "The condition of an if/else statement is enclosed within ______.",
    answers2: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    correct2: "Curly Brackets",
  },
  q3: {
    question3: "Arrays in Javascript can be used to store ______.",
    answers3: ["Numbers and strings", "Other Arrays", "Booleans", "All of the above",],
    correct3: "Booleans",
  },
  q4: {
    question4: "String values must be enclosed within ______ when being assigned to variables.",
    answers4: ["Quotes", "Curly Brackets", "Commas", "Parentheses"],
    correct4: "Quotes",
  },
  q5: {
    question5: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers5: ["Javascript", "console.log", "Terminal/bash", "For loops"],
    correct5: "console.log",
  },
};
// starts the timer
function startTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " second(s) left";
    if (secondsLeft <= 0) {
      alert("Out of time!");
      GameOver();
      clearInterval(timerInterval);
    }
  }, 1000);
}
//ends the game 
function GameOver() {
  clearInterval(timerInterval);
  endTime = secondsLeft;
  timeEl.textContent = "Your score is: " + endTime;
  main.style.display = "block";
  box1text.style.display = "none";
  box2text.style.display = "none";
  box3text.style.display = "none";
  box4text.style.display = "none";
  questionh1.style.display = "none";
  scoreForm.style.display = "block";
  nameFill.style.display = "block";
  clickBtn.textContent = "Play again?";
  clickBtn.style.display = "block";
}

//this is an event listener looking for a click to start the game
clickBtn.addEventListener("click", function () {
  if (!startQuiz) {
    startTime();
    secondsLeft = 300;
    haslengthRun = true;
    clickBtn.style.display = "none";
    box1text.style.display = "block";
    box2text.style.display = "block";
    box3text.style.display = "block";
    box4text.style.display = "block";
    questionh1.style.display = "block";
    main.style.display = "flex";
    timeEl.style.display = "block ";
    scoreForm.style.display = "none";
    askOne();
  }
});
myScore.addEventListener("click", function () {
  GameOver();
  timeEl.style.display = "none ";
  clickBtn.textContent = "Let's Play";
  clickBtn.style.display = "block";
});
//this removes the event listeners for each questions answers
function Remove() {
  box1text.removeEventListener("click", correctClick);
  box1text.removeEventListener("click", incorrectClick);
  box2text.removeEventListener("click", correctClick);
  box2text.removeEventListener("click", incorrectClick);
  box3text.removeEventListener("click", correctClick);
  box3text.removeEventListener("click", incorrectClick);
  box4text.removeEventListener("click", correctClick);
  box4text.removeEventListener("click", incorrectClick);
}
//alerts for correct answer
function correctClick() {
  alert("CORRECT!");

  if (i == 1) {
    askTwo();
    i++;
  } else if (i == 2) {
    askThree();
    i++;
  } else if (i == 3) {
    askFour();
    i++;
  } else if (i == 4) {
    askFive();
    i++;
  } else {
    GameOver();
    i = 1;
  }
}
//alerts for wrong answer
function incorrectClick() {
  //deducts 10 seconds
  alert("Wrong! -10 seconds");
  clearInterval(intervalId);
  intervalId = setInterval(updateCounter, 1000);
  secondsLeft -= 10;
}
function updateCounter() {
  secondsLeft--;
}

//this is question 1
function askOne() {
  Remove();
  questionh1.textContent = quiz.q1.question1;
  box1text.textContent = quiz.q1.answers1[0];
  box2text.textContent = quiz.q1.answers1[1];
  box3text.textContent = quiz.q1.answers1[2];
  box4text.textContent = quiz.q1.answers1[3];
  box1text.addEventListener("click", correctClick);
  box3text.addEventListener("click", incorrectClick);
  box2text.addEventListener("click", incorrectClick);
  box4text.addEventListener("click", incorrectClick);
}

//this is questions 2
function askTwo() {
  Remove();
  questionh1.textContent = quiz.q2.question2;
  box1text.textContent = quiz.q2.answers2[0];
  box2text.textContent = quiz.q2.answers2[1];
  box3text.textContent = quiz.q2.answers2[2];
  box4text.textContent = quiz.q2.answers2[3];
  box1text.addEventListener("click", incorrectClick);
  box2text.addEventListener("click", incorrectClick);
  box4text.addEventListener("click", incorrectClick);
  box3text.addEventListener("click", correctClick);
}

//this is question 3
function askThree() {
  Remove();
  questionh1.textContent = quiz.q3.question3;

  box1text.textContent = quiz.q3.answers3[0];
  box2text.textContent = quiz.q3.answers3[1];
  box3text.textContent = quiz.q3.answers3[2];
  box4text.textContent = quiz.q3.answers3[3];
  box3text.addEventListener("click", incorrectClick);
  box2text.addEventListener("click", incorrectClick);
  box4text.addEventListener("click", incorrectClick);
  box1text.addEventListener("click", correctClick);
}

//this is question 4
function askFour() {
  Remove();

  questionh1.textContent = quiz.q4.question4;

  box1text.textContent = quiz.q4.answers4[0];
  box2text.textContent = quiz.q4.answers4[1];
  box3text.textContent = quiz.q4.answers4[2];
  box4text.textContent = quiz.q4.answers4[3];
  box3text.addEventListener("click", incorrectClick);
  box2text.addEventListener("click", incorrectClick);
  box1text.addEventListener("click", incorrectClick);
  box4text.addEventListener("click", correctClick);
}

//this is question 5
function askFive() {
  Remove();
  questionh1.textContent = quiz.q5.question5;
  box1text.textContent = quiz.q5.answers5[0];
  box2text.textContent = quiz.q5.answers5[1];
  box3text.textContent = quiz.q5.answers5[2];
  box4text.textContent = quiz.q5.answers5[3];
  box3text.addEventListener("click", incorrectClick);
  box2text.addEventListener("click", incorrectClick);
  box4text.addEventListener("click", incorrectClick);
  box1text.addEventListener("click", correctClick);
}

function rendernames() {

  playerTotal.innerHTML = "";
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var li = document.createElement("li");
    li.textContent = name;
    li.setAttribute("data-index", i);
    var button = document.createElement("button");
    button.textContent = " Remove ❌";
    li.appendChild(button);
    playerTotal.appendChild(li);
  }
}
// Add submit 
nameFill.addEventListener("submit", function (event) {
  event.preventDefault();
  var nameText = playerName.value.trim() + " - " + endTime;
  // Return from function early if submitted nameText is blank
  if (nameText === "") {
    return;
  }

  // Add new nameText to names array
  names.push(nameText);
  playerName.value = "";
  // Store names in localStorage
  storenames();
  rendernames();
});

// Add click event to playerTotal element
playerTotal.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    names.splice(index, 1);
  }
});

// Calls init to retrieve data and render it 
init();