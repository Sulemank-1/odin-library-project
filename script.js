const myLibrary = [];
const containerDiv = document.querySelector(".container");

function Book(title, author, numberOfPages) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
}

function addBookToLibrary(title, author, numberOfPages) {
  const newBook = new Book(title, author, numberOfPages);
  myLibrary.push(newBook);
}

function displayBooks(library) {
  const i = library.length - 1;
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const titleP = document.createElement("p");
  titleP.classList.add("title");
  const authorP = document.createElement("p");
  authorP.classList.add("author");
  const numberOfPagesP = document.createElement("p");
  numberOfPagesP.classList.add("numberOfPages");

  containerDiv.appendChild(cardDiv);
  cardDiv.appendChild(titleP);
  cardDiv.appendChild(authorP);
  cardDiv.appendChild(numberOfPagesP);

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

  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    numberOfPagesInput.value
  );
  displayBooks(myLibrary);

  titleInput.value = "";
  authorInput.value = "";
  numberOfPagesInput.value = "";
});
