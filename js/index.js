//DECLARE GLOBAL CONSTANTS
const bookList = document.querySelector("#list-panel")
const bookDetails = document.querySelector("#show-panel")
const bookUL = document.querySelector('#list')

//HELPER FUNCTIONS

//adds books to list
function addBooks(book) {
const bookLI = document.createElement("li")
bookLI.textContent = book.title
bookUL.append(bookLI)


bookLI.addEventListener("click", () => showBookDetails(book))
}

//shows books details
async function showBookDetails(book) {

bookDetails.innerHTML = " "

const response = await fetch("http://localhost:3000/books", {
    headers: {"Accept": "applications/json"}
})
const bookDisplay = await response.json()

const bookTitle = document.createElement('h2')
const bookImg = document.createElement("img") 
const bookDesc = document.createElement('p')
const likeButton = document.createElement("button")


 bookTitle.textContent = book.title
 bookImg.src = book.img_url
 bookDesc.textContent = book.description
 likeButton.textContent = "LIKE"

 bookDetails.append(bookTitle)
 bookDetails.append(bookImg)
 bookDetails.append(bookDesc)
 bookDetails.append(likeButton)

 let i = 0 
book.users.forEach(addUsers)
function addUsers() {
    if (i < book.users.length){
    const userLikes = document.createElement("li")
    userLikes.textContent = book.users[i].username
    bookDetails.append(userLikes)
    i++
}}
}

async function addBookLikes () {
    const response = await fetch("http://localhost:3000/users", {
        method: "PATCH",
        headers:{"Content-Type" : 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({users: `Likes ${users.length}`})

    })

    const userLikes = response.json()
    console.log(userLikes)



    
}

//FETCH ON LOAD
async function loadBooks() {
    const response = await fetch("http://localhost:3000/books", {
        headers:{'Accept': 'application/json'}
    })
    const books = await response.json()
    console.log(books)

    books.forEach(addBooks)
}

loadBooks()

// EVENT LISTENERS


// bookLI.addEventListener("click", function () {
//     console.log("clicked")}
// )

// There are multiple ways to clear out an element on the DOM so that it returns to a blank state...
// Pay special attention to when you're adding event listeners!
// The like / unlike "list" is pretty weird, interpret it however you decide
