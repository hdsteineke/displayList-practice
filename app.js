// import functions and grab DOM elements
import { renderFlowerEl } from './render-flower.js';
import { flowers } from './flower-data.js';

import { renderBook } from './render-book.js';
import { books } from './book-data.js';

import { renderSnack } from './render-snack.js';
import { snacks } from './snack-data.js';

import { renderMusician } from './render-musician.js';
import { musicians } from './music-data.js';

// initialize global state
const flowerListEl = document.querySelector('.flower-container');
const bookListEl = document.querySelector('.book-container');
const snackListEl = document.querySelector('.snack-container');
const musicianListEl = document.querySelector('.musician-container');


for (let flower of flowers) {
    const flowerEl = renderFlowerEl(flower);

    flowerListEl.append(flowerEl);
}


for (let book of books) {
    const bookEl = renderBook(book);

    bookListEl.append(bookEl);
}

for (let snack of snacks) {
    const snackEl = renderSnack(snack);

    snackListEl.append(snackEl);
}

for (let musician of musicians) {
    const musicianEl = renderMusician(musician);

    musicianListEl.append(musicianEl);

}


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
