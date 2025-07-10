const myLibrary = [];
const containerDiv = document.querySelector(".container");

function Book(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = id;
}

function addBookToLibrary(title, author, id) {
  const newBook = new Book(title, author, id);
  myLibrary.push(newBook);
}


function displayBooks(library) {
  for (let i = 0; i < library.length; i++) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    const titleP = document.createElement("p");
    titleP.classList.add("title");
    const authorP = document.createElement("p");
    authorP.classList.add("author");
    
    containerDiv.appendChild(cardDiv);
    cardDiv.appendChild(titleP);
    cardDiv.appendChild(authorP);
    
    titleP.innerText = myLibrary[i].title;
    authorP.innerText = myLibrary[i].author;
  }
}

displayBooks(myLibrary);
