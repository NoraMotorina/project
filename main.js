"use strict";

const personalMovieDB = {
  count: number0fFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("What did you watch", ""),
    b = prompt("What stars", "");

  if (a != null && b != null && a != "" && b != "" && a.lenght < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы класически зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("вы киноман");
} else {
  console.log(" Error ");
}

console.log(personalMovieDB);
