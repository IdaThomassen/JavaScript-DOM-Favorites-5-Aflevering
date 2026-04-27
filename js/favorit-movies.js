"use strict";

const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "science-fiction",
    year: "2010",
    duration: "2.28",
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "action",
    year: "2008",
    duration: "2.32",
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 3,
    title: "Forrest Gump",
    genre: "drama",
    year: "1994",
    duration: "2.22",
    img: "img/forrest-gump.webp",
    url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    id: 4,
    title: "Superbad",
    genre: "comedy",
    year: "2007",
    duration: "1.53",
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/",
  },
  {
    id: 5,
    title: "It",
    genre: "horror",
    year: "2017",
    duration: "2.15",
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/",
  },
  {
    id: 6,
    title: "The Hangover",
    genre: "comedy",
    year: "2009",
    duration: "1.4",
    img: "img/the-hangover.webp",
    url: "https://www.imdb.com/title/tt1119646/",
  },
  {
    id: 7,
    title: "The Conjuring",
    genre: "horror",
    year: "2013",
    duration: "1.52",
    img: "img/the-conjuring.webp",
    url: "https://www.imdb.com/title/tt1457767/",
  },
  {
    id: 8,
    title: "Interstellar",
    genre: "science-fiction",
    year: "2014",
    duration: "2.55",
    img: "img/interstellar.jpg",
    url: "https://www.imdb.com/title/tt0816692/",
  },
  {
    id: 9,
    title: "The Matrix",
    genre: "science-fiction",
    year: "1999",
    duration: "3.02",
    img: "img/the-matrix.webp",
    url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    id: 10,
    title: "Pulp Fiction",
    genre: "drama",
    year: "1994",
    duration: "1.39",
    img: "img/pulp-fiction.webp",
    url: "https://www.imdb.com/title/tt0110912/",
  },
];

// DOM
const favoritesContainer = document.getElementById("favorites-container");

// ❗ FIX: korrekt localStorage key
let favoritIds = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

// Funktion til at hente favoritfilm dynamisk
function getFavoriteMovies() {
  return movies.filter((movie) => favoritIds.includes(movie.id));
}

// Render funktion
function displayMovies() {
  const favoriteMovies = getFavoriteMovies();

  if (!favoritesContainer) {
    console.error("Mangler #favorites-container i HTML");
    return;
  }

  if (favoriteMovies.length === 0) {
    favoritesContainer.innerHTML =
      "<p>Du har endnu ikke valgt nogen favorit film</p>";
    return;
  }

  const html = favoriteMovies
    .map((movie) => {
      return `
        <article>
          <div class="movie-header">
            <h2>${movie.title}</h2>
          </div>

          <h3>Genre: ${movie.genre}</h3>
          <h3>Year: ${movie.year}</h3>
          <p>Duration: ${movie.duration}</p>

          <figure class="movie-img">
            <a href="${movie.url}" target="_blank">
              <img src="${movie.img}" alt="${movie.title}">
            </a>
            <figcaption>Læs mere på IMDB</figcaption>
          </figure>
        </article>
      `;
    })
    .join("");

  favoritesContainer.innerHTML = html;
}

// Start
displayMovies();
