import { rlq, defArray } from "./imports.js"

export async function vocabDrill () {
  const vocabArr = Array.from(defArray)
  let correctAnswers = 0
  let counter = 0

  while (correctAnswers < defArray.length) {
    const i = Math.floor(Math.random() * vocabArr.length)

    const answer = rlq(`\nQ: ${vocabArr[i].definition}\n\n1.${vocabArr[i].possibleTerms[0]}\n2.${vocabArr[i].possibleTerms[1]}\n3.${vocabArr[i].possibleTerms[2]}\n4.${vocabArr[i].possibleTerms[3]}\n`)

    // eslint-disable-next-line eqeqeq
    if (answer.trim() == (vocabArr[i].correctDefinition + 1)) {
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
  return (correctAnswers + "/" + counter)
}
