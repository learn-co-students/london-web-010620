const corrigible = {
  createElement: (tag, { innerText, className, onClick }) => {
    const element = document.createElement(tag);

    if (innerText) element.innerText = innerText;
    if (className) element.className = className;
    if (onClick) {
      element.addEventListener("click", onClick);
    }

    return element;
  }
};

// React.createElement

const mainContainer = document.querySelector("main");

const API_ENDPOINT = "http://localhost:3000";
const TRAINERS_URL = `${API_ENDPOINT}/trainers`;
const POKEMONS_URL = `${API_ENDPOINT}/pokemons`;

const simpleGet = url => fetch(url).then(res => res.json());
const simplePost = (url, obj) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(obj)
  }).then(res => res.json());

const API = {
  getTrainers: () => simpleGet(TRAINERS_URL),
  postPokemon: trainer_id => simplePost(POKEMONS_URL, { trainer_id }),
  deletePokemon: pokemon =>
    fetch(`${POKEMONS_URL}/${pokemon.id}`, { method: "DELETE" })
};

const releasePokemon = (pokemon, listItem, callback) => {
  API.deletePokemon(pokemon).then(() => {
    listItem.remove();
    callback(pokemon);
  });
};

const renderPokemonIntoList = (pokemon, list, releaseCallback) => {
  // <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
  const listItem = corrigible.createElement("li", {
    innerText: `${pokemon.nickname} (${pokemon.species})`
  });

  const releaseButton = corrigible.createElement("button", {
    innerText: "Release",
    className: "release",
    onClick: () => releasePokemon(pokemon, listItem, releaseCallback)
  });

  listItem.append(releaseButton);

  list.append(listItem);
};

const createPokelist = (pokemons, releaseCallback) => {
  const pokelist = document.createElement("ul");

  pokemons.forEach(pokemon => {
    renderPokemonIntoList(pokemon, pokelist, releaseCallback);
  });

  return pokelist;
};

const addPokemon = (trainer, pokelist, releaseCallback) => {
  return API.postPokemon(trainer.id).then(pokemon => {
    trainer.pokemons.push(pokemon);
    renderPokemonIntoList(pokemon, pokelist, releaseCallback);
  });
};

const setButtonDisability = (pokemons, button) => {
  if (pokemons.length >= 6) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
  button.disabled = pokemons.length >= 6 ? true : false;
  button.disabled = pokemons.length >= 6;
};

/* <div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div> */
const renderTrainer = trainer => {
  console.log(trainer);
  const trainerDiv = document.createElement("div");

  trainerDiv.className = "card";

  const trainerP = document.createElement("p");
  trainerP.innerText = trainer.name;

  const addButton = document.createElement("button");
  addButton.innerText = "add a pokemon";

  setButtonDisability(trainer.pokemons, addButton);

  const releaseCallback = releasedPokemon => {
    trainer.pokemons = trainer.pokemons.filter(
      p => p.id !== releasedPokemon.id
    );
    setButtonDisability(trainer.pokemons, addButton);
  };

  const pokelist = createPokelist(trainer.pokemons, releaseCallback);

  addButton.addEventListener("click", () => {
    addPokemon(trainer, pokelist, releaseCallback).then(() => {
      setButtonDisability(trainer.pokemons, addButton);
    });
  });

  trainerDiv.append(trainerP, addButton, pokelist);

  mainContainer.append(trainerDiv);
};

const renderTrainers = trainers => {
  trainers.forEach(trainer => renderTrainer(trainer));
};

API.getTrainers().then(trainers => renderTrainers(trainers));
