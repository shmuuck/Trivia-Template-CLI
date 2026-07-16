const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fluff

let userName;

rl.question(`Enter Name: `, (answer) => {
  userName = answer;
  console.log(`\nWelcome, ${answer}\n`);
  // Starting The CLI
  startGame();
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

    currentQuestion++;
    askQuestion();
  }, 10000);

  rl.question("Your answer: ", (userAnswer) => {
    clearTimeout(timer);

    checkAnswer(userAnswer);

    currentQuestion++;
    askQuestion();
  });
}

// Answer check
function checkAnswer(userAnswer) {
  const correctAnswer = questions[currentQuestion].answer;

  const userAnswers = userAnswer
    .toLowerCase()
    .split(",")
    .map((answer) => answer.trim());

  const correctAnswers = correctAnswer
    .toLowerCase()
    .split(",")
    .map((answer) => answer.trim());

  const isCorrect = correctAnswers.every((answer) =>
    userAnswers.includes(answer),
  );

  if (isCorrect) {
    console.log("Correct!\n");
    score++;
  } else {
    console.log(`Wrong! The correct answer was: ${correctAnswer}\n`);
  }
}

// results
function endGame() {
  console.log(`Thank you ${userName} for playing`);
  console.log(`You scored: ${score}/${questions.length}`);

  rl.close();
}
