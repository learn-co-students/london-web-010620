const booksUrl = "http://localhost:3000/books"
const usersUrl = "http://localhost:3000/users"
const booksListEl = document.getElementById("list")
const bookPanelEl = document.getElementById("show-panel")
let currUser = null

const getBooks = () => {
    return fetch(booksUrl)
    .then(resp => resp.json())
}

const getBook = id => {
    return fetch(booksUrl+"/"+id)
    .then(resp => resp.json())  
}

const showBookInfo = book => {
    bookPanelEl.innerHTML = ""
    const titleEl = document.createElement('h2')
    const imgEl = document.createElement('img')
    const textEl = document.createElement('p')
    const btnEl = document.createElement('button')
    const userLikesEl = generateBookLikes(book.users)

    titleEl.innerText = book.title
    imgEl.src = book.img_url
    textEl.innerText = book.description
    btnEl.innerText = !liked(book) ? "Like and subscribe xD" : "Dislike and unsubscribe :["
    btnEl.addEventListener("click",() => updateLikes(book) )
    bookPanelEl.append(titleEl, imgEl, textEl, btnEl, userLikesEl)
}


const persistBookLike = book => {
    return fetch(booksUrl+"/"+book.id,{
        method: "PATCH",
        headers: {"content-type":"application/json",
    "accept":"application/json"},
        body: JSON.stringify({
            users: book.users
        })
    }).then(resp => resp.json())
    .then(book => showBookInfo(book))
}

const updateLikes = book => {
    let updatedBook = null
   if (liked(book)) {
       updatedBook = removeLike(book)
       persistBookLike(updatedBook)
    } else {
        updatedBook = addLike(book)
        persistBookLike(updatedBook)
   }

}

const removeLike = book => {
    book.users = book.users.filter(user => user.id !== currUser.id)
    return book
}

const addLike = book => {
    book.users.push(currUser)
    return book
}

const liked = book => {
    return book.users.find(user => user.id === currUser.id)
}

const generateBookLikes = users => {
    const likesListEl = document.createElement('ul')
    users.forEach(user => {
        const listEl = document.createElement('li')
        listEl.innerText = user.username
        likesListEl.appendChild(listEl)
    })
    return likesListEl
}

const renderBooks = books => {
    books.forEach(book => renderBook(book))
}

const renderBook = book => {
    const liEl = document.createElement('li')
    liEl.id = book.id
    liEl.innerText = book.title
    booksListEl.appendChild(liEl)
}

const init = () => {
    getBooks()
    .then(books => renderBooks(books))

    fetch(usersUrl+"/"+1).then(resp => resp.json())
    .then(user => currUser = user)
}

booksListEl.addEventListener('click', e => {
    const id = e.target.id
    getBook(id)
    .then(book => showBookInfo(book))
    
})

init()
