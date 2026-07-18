#!/usr/bin/env node

import * as readline from "node:readline/promises";
import he from "he";
import { Fetching } from "./api.js";
import { shuffle } from "./utils.js";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Game data
let questions = [];
let currentQuestion = 0;
let score = 0;
let userName;

// Game start
export async function startGame() {
  questions = await Fetching(5);

  userName = await rl.question(`Enter Name: `);

  console.log(`\nWelcome, ${userName}\n`);

  console.log("Let the Game begin!\n");

  console.log("You have a limited amount of time to complete each question\n");

while (currentQuestion < questions.length) {
  const question = questions[currentQuestion];

  const options = shuffle([
    question.correct_answer,
    ...question.incorrect_answers,
  ]);

  console.log(
    `Question ${currentQuestion + 1}: ${he.decode(question.question)}`
  );

  options.forEach((option, index) => {
    console.log(`${index + 1}. ${he.decode(option)}`);
  });

  const answer = Number(await rl.question("Your Answer: "));

  if (options[answer - 1] === question.correct_answer) {
    console.log("Correct!\n");
    score++;
  } else {
    console.log(
      `Wrong! The answer was ${he.decode(question.correct_answer)}\n`
    );
  }

  currentQuestion++;
}

  endGame();
}

// results
function endGame() {
  console.log(`Thank you ${userName} for playing`);
  console.log(`You scored: ${score}/${questions.length}`);

  rl.close();
}
