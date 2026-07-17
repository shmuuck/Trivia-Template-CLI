# CLI Trivia

A simple CLI trivia game for a certain lab.

## Functions

- Asks for your name
- Gives you a welcome
- Logs user input
- Answers to multiple-answer questions can be split by commas allow variance
- Supports multiple-answer questions
- Works with NodeJS no browser tests done
- Easy question implementation found in./src/questions.json, since it is json then no need for JS knowledge

## Changes from Origin

- removed the async question function
- made a loop in the startgame function
- cleaned up answer logic
- introduced a match type for answer checking
- modularized the codebase for scalability

## In the works

- Multiple-choice questions yet to be implimented
- Custom looks using chalk
- Animations using chalk-animation and more
- Better comments
- etc.

## Questions follow this format

{
"question": "What keyword declares a variable in java?",
"answer": ["let"],
"match": "all"
}

##### With commas in-between questions. All incapsulated in an array.

#### Kindly run npm install once, then just run npm start to start the trivia.
