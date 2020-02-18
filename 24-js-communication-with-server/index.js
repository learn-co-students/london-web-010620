const postsList = document.querySelector("#posts");

const waitThenDoSomething = (waitTime, callback) => {
  const time = Date.now();
  console.log("start cooking next thing");
  while (time + waitTime > Date.now()) {}
  callback();
};

const asyncWaitThenDoSomething = (waitTime, callback) => {
  console.log("start cooking something");
  setTimeout(callback, waitTime);
};

// waitThenDoSomething(1000, () => console.log("potatoes"));
// waitThenDoSomething(1000, () => console.log("carrots"));
// waitThenDoSomething(1000, () => console.log("meat or non meat"));
// waitThenDoSomething(1000, () => console.log("yorkshire puddings"));

// asyncWaitThenDoSomething(1000, () => console.log("potatoes"));
// asyncWaitThenDoSomething(1000, () => console.log("carrots"));
// asyncWaitThenDoSomething(1000, () => console.log("meat or non meat"));
// asyncWaitThenDoSomething(1000, () => console.log("yorkshire puddings"));

console.log("go and get a thing");
const promise = new Promise(resolve =>
  setTimeout(() => resolve("hello done"), 1500)
);

promise.then(value => console.log(value));

// const waitForClick () => {}
// const playAnimation (animation) => {}

// waitForClick()
//   .then(() => playAnimation("reveal"))
//   .then(() => playAnimation("win"))
//   .then(() => playAnimation("loop win"))
//   .then(() => console.log("and another tghing"))
//   .then(() => console.log("and another tghing"));

// fetch();

const renderPosts = posts => posts.forEach(renderPost);

const renderPost = postData => {
  const postEl = document.createElement("li");
  postEl.innerText = postData.data.title;
  postsList.append(postEl);
};

fetch("https://www.reddit.com/.json")
  .then(response => response.json())
  .then(data => renderPosts(data.data.children));

//   make a request
// then convert the data to a usable format
// then do something with that data

const requestPromise = fetch("https://www.reddit.com/r/javascript.json");

const jsonify = response => response.json();

const renderRedditData = redditData => {
  renderPosts(redditData.data.children);
};

requestPromise.then(jsonify).then(renderRedditData);
