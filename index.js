console.log('hello world');

let newItemInput = document.querySelector('input');
let movieList = document.querySelector('ul');

let addMovie = (e) => {
    e.preventDefault();

    // create a new movie item 
    let movie = document.createElement('li');
    
    // create movie title span and set text to movie title
    let movieTitle = document.createElement('span');
    movieTitle.innerText = newItemInput.value;

    // append movie title to movie title span
    movie.appendChild(movieTitle);

    // create delete button and adds an event listener
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie)

    // append button to movie span
    movie.appendChild(deleteBtn);

    // append movie title span to movie list
    movieList.appendChild(movie);

    // reset the input field
    newItemInput.value = '';
}

let deleteMovie = (e) => {
    // delete item
    e.target.parentNode.remove();
}

document.querySelector('form').addEventListener('submit', addMovie);
