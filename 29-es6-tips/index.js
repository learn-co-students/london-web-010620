const person = {
  name: "anderson",
  age: 27,
  height: "medium",
  games: [
    {
      name: "Leage of legends"
    }
  ]
};

// destructuring

const { name, age, food = "pasta" } = person;

console.log(food);

const createUserCard = ({ name, age, food = "pasta" }) => {
  // const { name, age, food = "pasta" } = user;
};

createUserCard(person);

const people = [person, { name: "sam" }];

const getPeople = () => people;

// const [anderson, sam] = people;
const [anderson, , ...others] = people;

console.log(others);
// const [anderson, sam] = getPeople();

const [counter, setCounter] = useState(0);

// key value assignment shortcut

const newp = {
  name: name,
  age: age,
  food: food
};

const newp = {
  name,
  age,
  food
};

// dynamic object keys

newp["name"];

const key = "name";
const value = "same";

newp[key];

const otherPerson = {
  age: 29,
  [key]: value
};

let formData = {};

const handleInputChange = event => {
  // formData = {
  //   [event.target.name]: event.target.value
  // }
  // formData[event.target.name] = event.target.value

  return {
    ...formData,
    [event.target.name]: event.target.value
  };
};

// ES6 Spread Operator

const numbers = [1, 2, 3];

const sumNumbers = numbers => {};

const sumThreeNumbers = (num1, num2, num3) => {};

sumThreeNumbers(...numbers);
sumThreeNumbers(1, 2, 3);

const copyOfPerson = {
  ...person
};

const copyOfNumbers = [...numbers];

// arrow functions

function doSomething() {
  return 0;
}

const doSomething = () => {
  return 0;
};
const doSomething = () => 0;

const objOfFunctions = {
  doSomething: () => 1,
  doSomething,
  doAnotherThingAlways1: () => doSomething(1),
  doAnotherThingAlways2: () => doSomething(2),
  doAnotherThingAlways3: () => doSomething(3)
};

const createDoSomething = number => () => doSomething(number);

function createDoSomething(number) {
  return function() {
    return doSomething(number);
  };
}
const doAnotherThingAlways1 = createDoSomething(1);
doAnotherThingAlways1();
const doAnotherThingAlways2 = createDoSomething(2);
const doAnotherThingAlways3 = createDoSomething(3);

// classes

class Sprite {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }

  render() {
    Game.renderSprite(this.sprite, this.x, this.y);
  }
}

class Player extends Sprite {
  constructor(x, y) {
    super(x, y, "player.png");
    this.score = 0;
  }

  move(x, y) {}

  render() {
    this.move(1, 10);
    super.render();
  }
}

class Enemy extends Sprite {
  constructor(x, y) {
    super(x, y, "enemy.png");
  }
}

const player1 = new Player(500, 1000);

// callbacks

const calculate = (number, calculation) => {
  return calculation(number);
};

const square = number => number * number;
const dividebyself = number => number / number;

calculate(5, square);
calculate(5, dividebyself);

Array.map((element, i) => {});

// iterators

// forEach;
array.forEach(element => {
  doSomething(element);
});

// map;
array
  .map(element => element.name)
  .map(name => name + " is your name")
  .filter(sentenct => sentenct.length > 10);

array.map(element => {
  return "hello";
});

// filter;
array.filter(element => {
  return true;
});
array.filter(element => {
  return false;
});
const [anderson] = array.filter(element => {
  return element.name === "anderson";
});
// anderson == undefined
array.filter((element, i) => {
  return i < 5;
});

// find;
array.find((element, i) => {
  return element.name === "anderson";
});

// reduce;
array.reduce((accumulator, element, i) => {
  // if (element.name === "RESET") {
  //   return []
  // }
  if (element.name === "anderson") {
    return [...accumulator, element];
  } else {
    return accumulator;
  }
}, []);

// currying and partial application

likeButton.addEventListener("click", likePerson(person));

const likePerson = person => {
  return () => {
    person.likes++;
  };
};

const setUpPlayerHandler = (keys, player) => {
  return e => {
    if (keys.includes(e.key)) {
    }
  };
};
