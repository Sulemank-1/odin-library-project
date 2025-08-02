const myLibrary = [];
const containerDiv = document.querySelector(".container");

function Book(title, author, numberOfPages, bookId) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.bookId = bookId;
}

function addBookToLibrary(title, author, numberOfPages, bookId) {
  const newBook = new Book(title, author, numberOfPages, bookId);
  myLibrary.push(newBook);
}

function displayBooks(library) {
  const i = library.length - 1;
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  const titleP = document.createElement("p");
  titleP.setAttribute("class", "title");
  const authorP = document.createElement("p");
  authorP.setAttribute("class", "author");
  const numberOfPagesP = document.createElement("p");
  numberOfPagesP.setAttribute("class", "numberOfPages");
  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.setAttribute("class", "remove-button");
  removeButton.setAttribute('data-book-id', myLibrary[i].bookId)

  containerDiv.appendChild(cardDiv);
  cardDiv.appendChild(titleP);
  cardDiv.appendChild(authorP);
  cardDiv.appendChild(numberOfPagesP);
  cardDiv.appendChild(removeButton);
  cardDiv.setAttribute("data-book-id", myLibrary[i].bookId);

  removeButton.addEventListener('click', function(){
    cardDiv.remove();
    myLibrary.splice(i, 1);    
  })

  titleP.innerText = myLibrary[i].title;
  authorP.innerText = myLibrary[i].author;
  numberOfPagesP.innerText = myLibrary[i].numberOfPages;
}

const dialog = document.querySelector(".dialog");
const addBookButton = document.querySelector("#add-book-button");
const closeButton = document.querySelector("#close-button");
const titleInput = document.querySelector("[name='title']");
const authorInput = document.querySelector("[name='author']");
const numberOfPagesInput = document.querySelector('[name="number-of-pages"]');

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const randomBookId = crypto.randomUUID();
  
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    numberOfPagesInput.value,
    randomBookId
  );
  
  displayBooks(myLibrary);

  titleInput.value = "";
  authorInput.value = "";
  numberOfPagesInput.value = "";

 
});
