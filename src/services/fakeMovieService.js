import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "815",
    title: "Terminator",
    genre: { _id: "818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "816",
    title: "Die Hard",
    genre: { _id: "818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "817",
    title: "Get Out",
    genre: { _id: "820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: "819",
    title: "Trip to Italy",
    genre: { _id: "814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "81a",
    title: "Airplane",
    genre: { _id: "814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "81b",
    title: "Wedding Crashers",
    genre: { _id: "814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "81e",
    title: "Gone Girl",
    genre: { _id: "820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    _id: "81f",
    title: "The Sixth Sense",
    genre: { _id: "820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    _id: "821",
    title: "The Avengers",
    genre: { _id: "818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
