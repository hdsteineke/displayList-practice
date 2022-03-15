// import functions and grab DOM elements
import { renderFlowerEl } from './render-flower.js';
import { flowers } from './flower-data.js';

import { renderBook } from './render-book.js';
import { books } from './book-data.js';

import { renderSnack } from './render-snack.js';
import { snacks } from './snack-data.js';

// initialize global state
const flowerListEl = document.querySelector('.flower-container');
const bookListEl = document.querySelector('.book-container');
const snackListEl = document.querySelector('.snack-container');


for (let flower of flowers) {
    const flowerEl = renderFlowerEl(flower);

    flowerListEl.append(flowerEl);
}


for (let book of books) {
    const bookEl = renderBook(book);

    bookListEl.append(bookEl);
}

console.log(snacks);
console.log(snackListEl);

for (let snack of snacks) {
    const snackEl = renderSnack(snack);

    snackListEl.append(snackEl);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
