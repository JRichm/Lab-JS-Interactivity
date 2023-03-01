let message = document.querySelector('#message')
let newItemInput = document.querySelector('input');
let movieList = document.querySelector('ul');

let addMovie = (e) => {
    e.preventDefault();

    // create a new movie item 
    let movie = document.createElement('li');
    
    // create movie title span and set text to movie title
    let movieTitle = document.createElement('span');
    movieTitle.innerText = newItemInput.value;
    movieTitle.addEventListener('click', crossOffMovie);

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

    // display remove message
    message.textContent = `Removed ${e.target.parentNode.textContent}!`
}

let crossOffMovie = (e) => {
    // toggle checked list item
    e.target.classList.toggle('checked');

    // display message based on current value
    if (e.target.classList.contains('checked')) {
        message.textContent = `${e.target.parentNode.textContent} Watched!`
    } else {
        message.textContent = `Added ${e.target.parentNode.textContent} Back!`
    }
}

document.querySelector('form').addEventListener('submit', addMovie);
