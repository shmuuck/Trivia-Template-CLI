# CLI Trivia

A simple CLI trivia game. With 2 Versions.

## Versions

Versions get their own branches.

#### v0.1 Multi-answer
- Hard-coded questions via Json.
- Supports multiple answers to one question using a any/all answer matching filter.
- Answers are manually typed and normalized.
- Multiple answers are split by commas.

#### v0.2 Multiple choice 
- A user inputs the number corresponding to the correct answer.
- Dynamic questions and answers imported via API.
- Does not have the multi-answer logic (could not make it work with APIs).

## Features

- Asks for your name
- Gives you a welcome
- Logs user input
- modularized the codebase for scalability

## In the works

- Custom looks using chalk
- Animations using chalk-animation and more
- Better comments
- etc.

## Questions follow this format 
##### This is only relevant for v0.1

{
"question": "What keyword declares a variable in java?",
"answer": ["let"],
"match": "all"
}

##### With commas in-between questions. All incapsulated in an array.

#### Kindly run npm install once, then just run npm start to start the trivia.
