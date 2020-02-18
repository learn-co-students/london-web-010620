// {}
// []
// 8

// // def my_other_method

// // end

// my_method(var1, var2, var3, 'my_other_method')

function sum(num1, num2) {
  return num1 + num2;
}

const sumAgain = function(num1, num2) {
  return num1 + num2;
};

const arrSumAgain = (num1, num2) => {
  return num1 + num2;
};

const smallArrSumAgain = (num1, num2) => num1 + num2;

const double = num => num * 2;

// document
//   .querySelector(".delete")
//   .addEventListener("click", event => event.target.parentElement.remove());

// document.querySelector("ul").addEventListener("click", event => {
//   if (event.target.className === "delete") {
//     event.target.parentElement.remove();
//   }
// });

const removeParentElement = el => el.parentElement.remove();

const addDeleteListener = (deleteButton, i) => {
  deleteButton.addEventListener("click", e =>
    removeParentElement(deleteButton)
  );
};

document.querySelectorAll(".delete").forEach(addDeleteListener);

const handleInputChange = event => {
  formData[event.target.name] = event.target.value;
  console.log(formData);
};

const handleFormSubmit = event => {
  event.preventDefault();
  console.log("form submitted");
  // send formData to backend
};

const formData = {
  firstname: "",
  lastname: "",
  middlename: "",
  nickname: ""
};

document.querySelector("form").addEventListener("input", handleInputChange);
document.querySelector("form").addEventListener("submit", handleFormSubmit);

let counterValue = 0;
let timerPaused = false;

const increaseCounter = () => counterValue++;
const counterEl = document.querySelector("#counter");
const renderCounterValue = () => (counterEl.innerText = counterValue);

let likesValue = 0;

const increaseLikes = () => likesValue++;
const likesEl = document.querySelector("#likes");
const renderlikesValue = () => (likesEl.innerText = likesValue);

likesEl.parentElement.addEventListener("click", () => {
  increaseLikes();
  renderlikesValue();
});

setInterval(() => {
  if (timerPaused) return;

  increaseCounter();
  renderCounterValue();
}, 1000);
