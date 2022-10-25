// Set up Comment class

class Comment {
  constructor (
    email,
    datePosted,
    userName,
    comment,
    author
  ) {
    this.email = email
    this.datePosted = datePosted
    this.userName = userName
    this.comment = comment
    this.author = author
  }

  post () {
    const newDiv = document.createElement("div")
    newDiv.className = "commentDiv"
    // format the date
    const d = new Date(this.datePosted)
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d)
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d)
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d)
    const date = `${mo} ${da} ${ye}`
    // create the content
    const content = `
    <span class="userName">${this.userName}</span>
    <span class="datePosted">${date}</span>
    <p class="comment">${this.comment}</p>
  `
    // add the content
    newDiv.innerHTML = content
    // add class for author=true
    if (this.author === true) {
      const spanUser = newDiv.querySelector(".userName")
      spanUser.classList.add("author")
    }
    // add the comment to the div containing all comments
    const allComments = document.querySelector("#allComments")
    allComments.prepend(newDiv)
  }

  postComments (arrayIn) {
    const arrayOut = Array.from(arrayIn)
    arrayOut.sort(
      (a, b) => new Date(a.datePosted) - new Date(b.datePosted)
    )
    arrayOut.forEach(element =>
      element.post())
  }
}

export default Comment
