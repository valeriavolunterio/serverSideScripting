// Import the Comment class so we can make new Comment objects.
import Comment from "./Comment.js"
// Create new Comment object
const commentC = new Comment(
  "alan@gmail.com",
  "2022-08-29T19:08:33.107Z",
  "Alan",
  "first",
  false
)

// Create new Comment object
const commentA = new Comment(
  "suki@cat.com",
  "2022-09-16T19:08:33.107Z",
  "Suki",
  "Update: We have come to the agreement that 8a.m. is an acceptable time to be fed. Thank you for coming on this journey with me.",
  true
)

// Create new Comment object
const commentB = new Comment(
  "valeria@volunterio.com",
  "2022-09-14T19:08:33.107Z",
  "Valeria",
  "Please stop",
  false
)
// Add Comment objects into an array
const commentArray = [commentA, commentB, commentC]

// Export the array to be used in other files
export default commentArray
