fetch("https://striveschool-api.herokuapp.com/api/movies", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGFmZGQ0YmUzZDAwMTU4NDYwYjMiLCJpYXQiOjE2NjgxNzAwOTksImV4cCI6MTY2OTM3OTY5OX0.08FdlJbQUIGK31EzdcHvCwcvGvfOH9AfkKqNLIIYU7w",
  },
});

const loadGenres = () => {
  fetch("https://striveschool-api.herokuapp.com/api/movies", {
    headers: {
      method: "GET",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGFmZGQ0YmUzZDAwMTU4NDYwYjMiLCJpYXQiOjE2NjgxNzAwOTksImV4cCI6MTY2OTM3OTY5OX0.08FdlJbQUIGK31EzdcHvCwcvGvfOH9AfkKqNLIIYU7w",
    },
  })
    .then((response) => response.json())
    .then((genres) => {
      console.log(genres);
      displayGenres(genres);
    })
    .catch((error) => {
      console.log(error);
    });
};

const loadMovies = () => {
  fetch(`https://striveschool-api.herokuapp.com/api/movies/${id}`, {
    headers: {
      method: "GET",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGFmZGQ0YmUzZDAwMTU4NDYwYjMiLCJpYXQiOjE2NjgxNzAwOTksImV4cCI6MTY2OTM3OTY5OX0.08FdlJbQUIGK31EzdcHvCwcvGvfOH9AfkKqNLIIYU7w",
    },
  })
    .then((response) => response.json())
    .then((movie_genre) => {
      console.log(movie_genre);
      displayGenres(movie_genre);
    })
    .catch((error) => {
      console.log(error);
    });
};

const selectGenre = (genre) => {};

const displayGenres = (genres) => {
  let mainContainer = document.getElementById("main-container");

  let newGenre = document.createElement("div");

  genres.forEach((genre) => {
    newGenre.classList.add("movie-gallery", "m-2");
    newGenre.innerHTML = `  <h5 class="text-light", "mt-2", "mb-2">Trending Now</h5>`;
  });
};
