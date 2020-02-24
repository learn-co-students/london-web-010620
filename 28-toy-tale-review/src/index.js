const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
const toyForm = document.querySelector("form");
const toyCollection = document.querySelector("#toy-collection");
const filterButton = document.querySelector("#likes-filter");
let addToy = false;

const TOYS_URL = "http://localhost:3000/toys";

const API = {
  getToys: () => fetch(TOYS_URL).then(res => res.json()),
  postToy: toy =>
    fetch(TOYS_URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(toy)
    }).then(res => res.json()),
  patchToy: toy =>
    fetch(`${TOYS_URL}/${toy.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify(toy)
    }).then(res => res.json()),
  deleteToy: toy =>
    fetch(`${TOYS_URL}/${toy.id}`, {
      method: "DELETE"
    }).then(res => res.json())
};

// YOUR CODE HERE

const toggleToyFormVisibility = () => {
  addToy = !addToy;
  if (addToy) {
    toyFormContainer.style.display = "block";
    // submit listener here
  } else {
    toyFormContainer.style.display = "none";
  }
};

addBtn.addEventListener("click", toggleToyFormVisibility);

// OR HERE!

const ce = tag => document.createElement(tag);

const renderToy = toy => {
  const toyDiv = ce("div");

  toyDiv.className = "card";

  // h2 tag with the toy's name
  const nameElement = ce("h2");
  nameElement.innerText = toy.name;

  // * image tag with the src of the toy's image attribute - needs a class name of "toy-avatar"
  const imgElement = ce("img");
  imgElement.className = "toy-avatar";
  imgElement.src = toy.image;

  // * p tag with how many likes that toy has
  const likesElement = ce("p");
  likesElement.innerText = `${toy.likes} likes`;

  // * button tag with an class of "like-btn"
  const likeButton = document.createElement("button");
  likeButton.className = "like-btn";
  likeButton.innerText = "Like <3";

  likeButton.addEventListener("click", () => {
    likeButton.disabled = true;
    increaseLikes(toy).then(toy => {
      likesElement.innerText = `${toy.likes} likes`;
      likeButton.disabled = false;
    });
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "like-btn";
  deleteButton.innerText = "delete x";

  deleteButton.addEventListener("click", () => deleteToy(toy, toyDiv));

  toyDiv.append(
    nameElement,
    imgElement,
    likesElement,
    likeButton,
    deleteButton
  );

  toyCollection.append(toyDiv);
};

const deleteToy = (toy, toyDiv) => {
  API.deleteToy(toy).then(() => {
    toyDiv.remove();
  });
};

const increaseLikes = toy => {
  toy.likes++;
  return API.patchToy(toy);
};

const renderToys = toys => {
  toyCollection.innerText = "";
  toys.forEach(toy => {
    renderToy(toy);
  });
};

const createNewToyObject = (name, image) => {
  return {
    name,
    image,
    likes: 0
  };
};

toyForm.addEventListener("submit", event => {
  event.preventDefault();

  const newToy = createNewToyObject(
    event.target.elements.name.value,
    event.target.elements.image.value
  );

  API.postToy(newToy)
    .then(toy => {
      allToys.push(toy);
      renderToy(toy);
    })
    .then(() => {
      toggleToyFormVisibility();
      event.target.reset();
    });
});

let filterEnabled = false;
let allToys = [];

API.getToys().then(toys => {
  allToys = toys;
  filterButton.addEventListener("click", () => {
    filterEnabled = !filterEnabled;
    if (filterEnabled) {
      renderToys(allToys.filter(toy => toy.likes >= 10));
    } else {
      renderToys(allToys);
    }
  });
  renderToys(allToys);
});
