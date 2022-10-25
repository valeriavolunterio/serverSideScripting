import { multiLinePrompt } from "./imports.js"
import { multChoice } from "./multipleChoice.js"
// import { vocabDrill } from "./definitionsOLD.js"
import { vocabDrill } from "./definitions.js"

export async function program () {
  const input = multiLinePrompt("\nStudy App\n\nModes:\n1. Multiple Choice\n2. Vocabulary Drill\n3. Exit\n\n> ")
  switch (input.trim()) {
    case "1": {
      const score = await multChoice()
      console.log("\nscore: " + score)
      program()
      break
    }
    case "2": {
      const score = await vocabDrill()
      console.log("\nscore: " + score)
      program()
      break
    }
    case "3":
      console.log("\nThanks for using the Study App!")
      process.exit()
      break
    default:
      console.log("\nPlease enter a valid input.\n")
      program()
      break
  }
}
