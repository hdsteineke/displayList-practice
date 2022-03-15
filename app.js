// import functions and grab DOM elements
import { renderFlowerEl } from './render-flower.js';
import { flowers } from './flower-data.js';

import { renderBook } from './render-book.js';
import { books } from './book-data.js';

// initialize global state
const flowerListEl = document.querySelector('.flower-container');
const bookListEl = document.querySelector('.book-container');


for (let flower of flowers) {
    const flowerEl = renderFlowerEl(flower);

    flowerListEl.append(flowerEl);
}




for (let book of books) {
    const bookEl = renderBook(book);

    bookListEl.append(bookEl);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
