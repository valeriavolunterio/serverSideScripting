# Lab 5: Studying App

Create a simple command line study program.

The data for the program should consist of both a set of questions and answers and a set of terms and definitions. These are both stored in a local JSON file as data, with the following structures:

multipleChoice.json

```json
[
  {
    "question": "What JavaScript function prints its arguments to standard out?",
    "possibleAnswers": [
      "process.standardout",
      "console.write",
      "process.stdout.write",
      "process.write"
    ],
    "correctAnswer": 2
  },
  {
    "question": "What is the \".\" character mean with respect to linux file paths?",
    "possibleAnswers": [
      "Current direcory",
      "Parent directory",
      "Home directory",
      "Root directory"
    ],
    "correctAnswer": 0
  }
]
```

definitions.json

```json
[
  {
    "definition": "A text-based interface used to interact with the operating system",
    "possibleTerms": [
      "command line",
      "server",
      "developer tools",
      "debugger"
    ],
    "correctDefinition": 1
  },
  {
    "definition": "A term used to describe a file or directory location on a drive",
    "possibleTerms": [
      "name",
      "separator",
      "path",
      "prompt"
    ],
    "correctDefinition": 2
  }
]
```

You must use the global static method `JSON.parse` to parse the textual content of the file into an array. The function will return the JavaScript object that is present in the text, or throw an error if the text cannot be parsed into JSON.

The following is an example of its use:

```javascript
let sampleJson = "[1,2,3]"
let parsedArray = JSON.parse(sampleJson)
console.log(parsedArray[0]) // 1
```

The user should be presented with the three options: **Multiple Choice**, **Vocabulary Drill** or **Exit**:

```text
Study App

Modes:
1. Multiple Choice
2. Vocabulary Drill
3. Exit

> 
```

As below, the last line is a greater than symbol followed by a space. The user's input will appear there, and be provided through standard in. You can use the readline module to handle user input:

```javascript
// 5/readline.js
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
export async function program() {
  rl.question("Enter a number between 1-3, q to quit.\n> ", (answer) => {
    if (answer !== "q") {
      console.log(`You answered ${answer}`)
      program()
    }
  })
}

program()

```

Entering 1 and hitting enter will go to the first mode, 2 and enter will go to the second mode, 3 and enter will exit the program.

## Mode 1: Multiple Choice

The questions should be asked in the same order they are provided. Each question should be presented with the following format:

```text
Q: Question goes here

1. Answer 1
2. Answer 2
3. Answer 3
4. Answer 4

 > 
```

The final line should consist of a prompt with a greater than symbol and a single space. The only input accepted would be the number corresponding to one of the options, any other input would present the same prompt again.

1. Each question should be provided as a prompt, which includes the options (with each option given an option number). Options should be numbered starting at 1, and each should be on their own line. The correct answer is provided as an index of the correct answer.
2. The user should enter a option number to select it, and any other input is ignored and the prompt re-printed. If the user enters "q", the score is printed and the program should reprint the main menu.
3. Calculate the user's score out of the number of questions, with each question given one point.

## Mode 2: Drill

In this mode, the user is presented with a definition and a set of possible terms drawn from the file "definitions.json"

1. The program should select a random term from the list of of terms, including the correct one, and then give the user 5 seconds to answer correctly. 
2. If the user provides the correct term, the definition is removed from the set of possible questions.
3. If the timer expires, the user scores a 0 for that question.
4. This should continue until either there are no more questions remaining or the user enters "q" as the answer, in which case the program should print the score and reprint the main menu.
5. Then the score is displayed and the main menu is displayed.

A sample output is provided below, given a single term as the input in definitions.json:

```text
Study App

Modes:
1. Multiple Choice
2. Vocabulary Drill
3. Exit

 > 2

Definition: A term used to describe a file or directory location on a drive

1. name
2. separator
3. path
4. prompt
 > 1

Incorrect

Definition: A term used to describe a file or directory location on a drive

1. name
2. separator
3. path
4. prompt
 > 3

Correct

Score: 1/2

Study App

Modes:
1. Multiple Choice
2. Vocabulary Drill
3. Exit

 > 
```
