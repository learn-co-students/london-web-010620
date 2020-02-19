const FILMS_URL = "http://localhost:3000/films";

const getFilms = fetch(FILMS_URL).then(res => res.json());

const postFilm = filmObj => {
  return fetch(FILMS_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filmObj)
  }).then(res => res.json());
};
