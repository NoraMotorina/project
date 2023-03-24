"use strict";

// const number0fFilms = +prompt("How many filmes did you watch?", "");

// const personalMovieDB = {
//   count: number0fFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("What did you watch", ""),
//   b = prompt("What stars", ""),
//   c = prompt("What did you watch", ""),
//   d = prompt("What stars", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Mani");
// } else {
//   console.log("OK");
// }

// num === 50 ? console.log("OK") : console.log("Error");

// const num = 50;

// switch (num) {
//   case 48:
//     console.log("good job");
//     break;
//   case 100:
//     console.log("Error");
//     break;
//   case 51:
//     console.log("True");
//     break;
//   default:
//     console.log("No this time");
//     break;
// }

// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries) {
//     console.log ("I am full");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log (hamburger === 3 && cola && fries);
// console.log (1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "hghjjjgjh");

// if (hamburger === 3 && cola === 1 && fries ) {
//   console.log("All full");
// }else{
//     console.log(" We are living");
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num ++;
// }

// let num = 50;
// do  {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// let num = 50;

// for ( let i = 1; i < 10; i ++ ) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);

// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// // *
// // **
// // ***
// // ****
// // *****
// // ******

// let result = "";
// const lenght = 5;

// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 4; k++) {
//       if (k === 2) break first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

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
