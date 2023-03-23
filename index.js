"use strict";

const number0fFilms = +prompt("How many filmes did you watch?", "");

const personalMovieDB = {
  count: number0fFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("What did you watch", ""),
  b = prompt("What stars", ""),
  c = prompt("What did you watch", ""),
  d = prompt("What stars", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
