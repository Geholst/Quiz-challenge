//define all questions and answers 
var question0 = {
    text: "Commonly used data types do NOT include:",
    choices: ["1 - Booleans", "2 - Alerts", "3 - Strings", "4 - Numbers"],
    correctAnswer: "option1",
};

var question1 = {

    text: "The condition of an if/else statement is enclosed within ______.",
    choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Parentheses", "4 - Square Brackets"],
    correctAnswer: "option2",
};

var question2 = {
    text: "Arrays in Javascript can be used to store ______.",
    choices: ["1 - Numbers and strings", "2 - Other Arrays", "3 - Booleans", "4 - All of the above",],
    correctAnswer: "option3",
};

var question3 = {
    text: "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Commas", "4 - Parentheses"],
    correctAnswer: "option0",
};

var question4 = {
    text: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1 - Javascript", "2 - console.log", "3 - Terminal/bash", "4 - For loops"],
    correctAnswer: "option1",
};

var questionList = [question0, question1, question2, question3];





function startTime() {
    timeStarter = setInterval(function () {
      secondsLeft--;
      timeH2.textContent = secondsLeft + " seconds left";
      if (secondsLeft <= 0) {
      }
    }, 1000);
  }
  console.log(startTime)

//define var for tracking 
//      track time 
//      track questions 

//create var to refrence DOM elements
//      timer
//      questions
//      answers
//      start button      
//      users initials
//      save button 
//      high scores

// function 
//   start the quiz 
//      hide start button
//      show quiz container
//      start timer
//      dispaly countdown  on screen 
//      display first question 

//function
//      rendering a question
//          clear/remove previous question            
//          getting first question
//          add question to question container
//          add button for each answer
//          add answers to answer contain

//function
//        handle the quiz completion
//          stop timer
//          hide quiz container
//          show end screen
//          show time remaining as score            


//function  (event listener)
//      handle answer clicks
//      
//      if
//      answer is WRONG
//      subtract time from timer 
//      make sure time is displayed on page correctly
//      flash wrong answer message (setTimeout)
//
//      update to next question
//      display question on page
//
//      if 
//      question is last question
//      trigger quiz completion

//function
//      tracking time
//          subtract time 
//          update the page 
//          
//      if
//      timer hits zero
//          trigger quiz completion

//function
//      save high scores
//          get value of user input (name/initials)
//          validate input
//          retrieve existing data from local storage 
//          update the high score data
//          save updated data back to local storage
//          redirect to start screen after save

//function
//      listening for key press    
//          check if key pressed was enter for saving scores 


//event listeners
//      click start 
//      click answers
//      click save scores
//      keyups

