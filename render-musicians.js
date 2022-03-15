export function renderMusicians(someMusician) {
    const musicianEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const albumEl = document.createElement('p');
    const songsEl = document.createElement('ul');

    musicianEl.classList.add('musician');

    nameEl.textContent = someMusician.artist;
    albumEl.textContent = someMusician.album;
    
    for (let song of someMusician.songs) {
        const songEl = document.createElement('li');
        songEl.textContent = song;

        songsEl.append(song);
    }

    musicianEl.append(nameEl, albumEl, songsEl);
}