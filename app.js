// import functions and grab DOM elements
import { renderFlowerEl } from './render-flower.js';
import { flowers } from './flower-data.js';

// initialize global state
const flowerListEl = document.querySelector('.flower-container');
for (let flower of flowers) {
    const flowerEl = renderFlowerEl(flower);

    flowerListEl.append(flowerEl);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
