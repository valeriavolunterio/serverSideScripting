import fs from "fs"
import promptSync from "prompt-sync"
import readline from "readline"

export const multArray = JSON.parse(fs.readFileSync("../lab5/json/multipleChoice.json"))
export const defArray = JSON.parse(fs.readFileSync("../lab5/json/definitions.json"))

export const prompt = promptSync()
// helper function found on github due to issues with print errors
export const multiLinePrompt = ask => {
  const lines = ask.split(/\r?\n/)
  const promptLine = lines.pop()
  console.log(lines.join("\n"))
  return prompt(promptLine)
}

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
