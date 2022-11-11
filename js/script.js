const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGFmZGQ0YmUzZDAwMTU4NDYwYjMiLCJpYXQiOjE2NjgxNzAwOTksImV4cCI6MTY2OTM3OTY5OX0.08FdlJbQUIGK31EzdcHvCwcvGvfOH9AfkKqNLIIYU7w",
  },
};

async function loadHorror() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/horror",
    options
  );

  const horrorMovies = await response.json();
  console.log(horrorMovies);

  const containerRow = document.querySelector(
    "#trending-now > div > div.carousel-item.active > div > div"
  );

  horrorMovies.forEach((movie) => {
    const poster = document.createElement("div");
    poster.className = "col-md-2";
    poster.innerHTML = `<img class="movie-cover" src=${movie.imageUrl}>`;
    containerRow.appendChild(poster);
  });
}

async function loadComedy() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/comedy",
    options
  );

  const comedyMovies = await response.json();
  console.log(comedyMovies);

  const containerRow = document.querySelector(
    "#watch-it-again > div > div.carousel-item.active > div > div"
  );

  comedyMovies.forEach((movie) => {
    const poster = document.createElement("div");
    poster.className = "col-md-2";
    poster.innerHTML = `<img class="movie-cover" src=${movie.imageUrl}>`;
    containerRow.appendChild(poster);
  });
}

async function loadAnime() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/anime",
    options
  );

  const animeMovies = await response.json();
  console.log(animeMovies);

  const containerRow = document.querySelector(
    "#new-releases > div > div:nth-child(1) > div > div"
  );

  animeMovies.forEach((movie) => {
    const poster = document.createElement("div");
    poster.className = "col-md-2";
    poster.innerHTML = `<img class="movie-cover" src=${movie.imageUrl}>`;
    containerRow.appendChild(poster);
  });
}

window.onload = () => {
  loadComedy();
  loadHorror();
  loadAnime();
};
