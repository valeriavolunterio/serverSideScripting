import { multiLinePrompt, multArray } from "./imports.js"

export async function multChoice () {
  const correctAnswers = []
  for (let i = 0; i < multArray.length; i++) {
    const answer = await multiLinePrompt(`\nQ: ${multArray[i].question}\n\n1.${multArray[i].possibleAnswers[0]}\n2.${multArray[i].possibleAnswers[1]}\n3.${multArray[i].possibleAnswers[2]}\n4.${multArray[i].possibleAnswers[3]}\n> `)
    // eslint-disable-next-line eqeqeq
    if (answer.trim() == (multArray[i].correctAnswer + 1)) {
      console.log("\ncorrect")
      correctAnswers.push(answer)
    } else if (answer.trim() >= 1 && answer <= 4) {
      console.log("\nincorrect")
      // eslint-disable-next-line eqeqeq
    } else if (answer.trim() == "q") {
      return (correctAnswers.length + "/" + i)
    } else {
      console.log("\nPlease enter a valid answer")
      i--
    }
  }
  return (correctAnswers.length + "/" + multArray.length)
}
