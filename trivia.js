const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fluff

let userName;

rl.question(`Enter Name: `, (answer) => {
  userName = answer;
  console.log(`Welcome, ${answer}`);
  rl.close();
});

// Questions

const questions = [
  {
    question: "What keyword declares a variable in java?",
    answer: "let",
  },
  {
    question:
      "what two operators are represented by the following syntax (...)?",
    answer: ["rest", "spread"],
  },
  {
    question: "what does CSS stand for?",
    answer: "cascading style sheets",
  },
];

// Game data
let currentQuestion = 0;
let score = 0;
let timer;

// Game start
function startGame() {
  console.log("Let the Game begin!");
  console.log("You have a limited amount of time to complete each question");

  askQuestion();
}

// Question display and answer request
function askQuestion() {
  if (currentQuestion >= questions.length) {
    endGame();
    return;
  }
  const trivia = questions[currentQuestion];
  console.log(`Question ${currentQuestion + 1}: ${trivia.question}`);

  //Timer
  timer = setTimeout(() => {
    console.log("\n Times Up!");
    console.log(`Correct answer: ${trivia.answer}\n`);
  });
}
