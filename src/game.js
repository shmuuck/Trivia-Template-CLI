#!/usr/bin/env node

import * as readline from "node:readline/promises";
import questions from "./questions.json" with { type: "json" };

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Game data
let currentQuestion = 0;
let score = 0;
let userName;

// Game start
export async function startGame() {
  userName = await rl.question(`Enter Name: `);

  console.log(`\nWelcome, ${userName}\n`);

  console.log("Let the Game begin!\n");

  console.log("You have a limited amount of time to complete each question\n");

  while (currentQuestion < questions.length) {
    const question = questions[currentQuestion];

    console.log(`question ${currentQuestion + 1}: ${question.question}`);

    const userAnswer = await rl.question("Your Answer: ");

    checkAnswer(userAnswer);

    currentQuestion++;
  }

  endGame();
}

// Answer check
function checkAnswer(userAnswer) {
  const question = questions[currentQuestion];

  const userAnswers = userAnswer
    .toLowerCase()
    .split(",")
    .map((answer) => answer.trim());

  const correctAnswers = question.answer.map((answer) =>
    answer.toLowerCase().trim(),
  );

  let isCorrect;

  if (question.match === "any") {
    isCorrect = correctAnswers.some((answer) => userAnswers.includes(answer));
  } else if (question.match === "all") {
    isCorrect = correctAnswers.every((answer) => userAnswers.includes(answer));
  } else {
    console.error(`Match not given: ${question.match}`);
    return;
  }

  if (isCorrect) {
    console.log("Correct!\n");
    score++;
  } else {
    console.log(
      `Wrong! The correct answer was: ${question.answer.join(", ")}\n`,
    );
  }
}

// results
function endGame() {
  console.log(`Thank you ${userName} for playing`);
  console.log(`You scored: ${score}/${questions.length}`);

  rl.close();
}
