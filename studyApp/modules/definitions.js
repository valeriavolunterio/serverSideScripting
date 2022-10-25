/* eslint-disable eqeqeq */
import { rl, defArray } from "./imports.js"

export async function vocabDrill () {
  // make a new array and set counters
  const vocabArr = Array.from(defArray)
  let correctAnswers = 0
  let counter = 0

  async function loop () {
    while (correctAnswers < defArray.length) {
      const i = Math.floor(Math.random() * vocabArr.length)
      // timed question
      const timedQuestion = new Promise(function (resolve) {
        rl.question(`\nDefinition: ${vocabArr[i].definition}\n\n1.${vocabArr[i].possibleTerms[0]}\n2.${vocabArr[i].possibleTerms[1]}\n3.${vocabArr[i].possibleTerms[2]}\n4.${vocabArr[i].possibleTerms[3]}\n\n> `, answer => {
          clearTimeout(timeout)
          resolve(answer)
        })
        const timeout = setTimeout(() => {
          resolve("timeout")
        }, 5000)
      })
      // eslint-disable-next-line no-var
      var answer = await timedQuestion

      // validate the answer
      if (answer == "timeout") {
        // rl.write to close question
        rl.write("\n")
        console.log("\nTime Out")
        counter++
      } else if (answer.trim() == (vocabArr[i].correctDefinition + 1)) {
        console.log("\ncorrect")
        vocabArr.splice(i, 1)
        correctAnswers++
        counter++
      } else if (answer.trim() >= 1 && answer <= 4) {
        console.log("\nincorrect")
        counter++
      // eslint-disable-next-line eqeqeq
      } else if (answer.trim() == "q") {
        return (correctAnswers + "/" + counter)
      } else {
        console.log("\nPlease enter a valid answer")
      }
    }
    // return score after while loop ends
    return (correctAnswers + "/" + counter)
  }
  const done = await loop()
  return done
}
