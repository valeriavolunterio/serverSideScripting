import Comment from "./components/Comment.js"
import commentArray from "./components/comments.js"

function init () {
  commentArray[0].postComments(commentArray)
}
function logSubmit (event) {
  event.preventDefault()
  // get user info from form values
  const inputs = form.getElementsByTagName("input")
  const email = inputs[0].value
  const userName = inputs[1].value
  // get the comment
  const text = form.querySelector("textarea")
  const comment = text.value
  // create a new comment object with the values
  const newComment = new Comment(
    email,
    Date.now(),
    userName,
    comment,
    false
  )
  newComment.post()
}

window.addEventListener("load", init, false)

const form = document.getElementById("commentForm")
form.addEventListener("submit", logSubmit)
