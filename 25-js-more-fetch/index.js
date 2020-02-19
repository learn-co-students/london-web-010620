const film = {
  title: "The Lighthouse",
  genres: "Horror",
  rating: 9.5,
  img_url:
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/The_Lighthouse.jpeg/220px-The_Lighthouse.jpeg"
};

const filmsEl = document.querySelector("#films");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", e => {
  e.preventDefault();
  postFilm({
    title: e.target.elements.title.value,
    rating: e.target.elements.rating.value,
    genres: e.target.elements.genres.value,
    img_url: e.target.elements.img_url.value
  })
    .then(renderFilm)
    .then(() => e.target.reset());
});

const renderFilms = films => films.forEach(film => renderFilm(film));

const renderFilm = film => {
  const filmDiv = document.createElement("div");
  filmDiv.className = "media";

  const titleEl = document.createElement("h3");
  const ratingEl = document.createElement("p");
  const genresEl = document.createElement("p");
  const imgEl = document.createElement("img");

  titleEl.innerText = film.title;
  ratingEl.innerText = film.rating;
  ratingEl.className = "rating";
  genresEl.innerText = film.genres;
  genresEl.className = "genres";
  imgEl.src = film.img_url;

  filmDiv.append(titleEl, ratingEl, genresEl, imgEl);

  // filmDiv.querySelector('button').addEventListener('click')
  filmsEl.append(filmDiv);
};

getFilms().then(renderFilms);
