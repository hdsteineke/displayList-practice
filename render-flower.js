export function renderFlowerEl(someFlower) {
    const flowerEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const imgEl = document.createElement('img');
    const latinEl = document.createElement('p');
    const colorEl = document.createElement('p');

    flowerEl.classList.add('flower');

    nameEl.textContent = someFlower.name;
    imgEl.src = `./assets/${someFlower.name}.png`;
    latinEl.textContent = someFlower.latin_name;
    colorEl.textContent = someFlower.color;

    flowerEl.append(nameEl, imgEl, latinEl, colorEl);

    return flowerEl;

}