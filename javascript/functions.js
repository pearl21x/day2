const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
];

// Part 1 - Create a function to find a movie and output it's detail

// function findMovie(movieTitle) {
//     for (const movie of movies) {
//         const title = movie['title'];
//         if (title == movieTitle) {
//             console.log(movie);
//         }
//     }
// }

// findMovie('Jaws');
// findMovie('Star Wars');

// Part 2 = Create a function to return a movie object

function returnMovie(movieTitle) {
    for (const movie of movies) {
        console.log(movie);
        const title = movie['title'];
        if (title == movieTitle) {
            return movie;

        }
    }

    // console.log("Any text, any text at all");
    return "movie not found"
}

const myMovie = returnMovie("Avengers: Infinity War");

const myOtherMovie = returnMovie("Thor: Ragnorok");
console.log(myOtherMovie);

function myMovieDetails(anyMovie) {
    if (typeof anyMovie == 'object') {
        let { title, director, year } = anyMovie;
        suitableString = 'title: ' + title + ', director: ' + director + ", year: " + year;
        return suitableString;
    } else {
        return anyMovie;
    }
}

console.log(myMovieDetails(myOtherMovie));
console.log(myMovieDetails(returnMovie('Jaws')))