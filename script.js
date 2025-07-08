const myLibrary = [];

function Book(title, author, id) {
  this.title =  title;
  this.author = author;
  this.id = id;
}

function addBookToLibrary(title, author, id) {
    const newBook = new Book(title, author, id);
    myLibrary.push(newBook);
}


