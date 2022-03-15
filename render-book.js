export function renderBook(someBook) {
    const bookEl = document.createElement('div');
    const titleEl = document.createElement('h3');
    const imgEl = document.createElement('img');
    const yearEl = document.createElement('p');
    const authorEl = dosument.createElement('p');

    bookEl.classList.add('book');

    titleEl.textContent = someBook.title;
    imgEl.src = `./assets/${someBook.title}.PNG`;
    yearEl.textContent = someBook.year;
    authorEl.textContent = someBook.author.name;

    bookEl.append(titleEl, imgEl, yearEl, authorEl);

    return bookEl;

}