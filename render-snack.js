export function renderSnack(someSnack) {
    const snackEl = document.createElement('div');
    const snackTypeEl = document.createElement('p');

    snackEl.classList.add('.snack');

    snackTypeEl.textContent = someSnack;

    snackEl.append(snackTypeEl);

    return snackEl;
}