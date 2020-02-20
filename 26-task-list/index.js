const PRIORITY_LABELS = {
  1: "HIGH",
  2: "MID",
  3: "LOW"
};

const formEl = document.querySelector("form");
const tasksEl = document.querySelector("#tasks");

const TASKS_URL = "http://localhost:3000/tasks";

const config = (method = "POST", bodyObj) => {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyObj)
  };
};

const postConfig = task => {
  return config("POST", task);
};
const patchConfig = task => {
  return config("PATCH", task);
};

const API = {
  getTasks: () => fetch(TASKS_URL).then(response => response.json()),
  postTask: task =>
    fetch(TASKS_URL, postConfig(task)).then(response => response.json()),
  patchTask: task =>
    fetch(`${TASKS_URL}/${task.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    }).then(response => response.json())
};

const constructTaskObject = (text, priority) => {
  return {
    text,
    priority,
    completed: false
  };
};

const handleFormSubmit = event => {
  event.preventDefault();

  //   const text = event.target.elements.text;
  //   const priority = event.target.elements.priority;

  const { text, priority } = event.target.elements;

  const task = constructTaskObject(text.value, priority.value);
  API.postTask(task).then(task => renderTask(task));
};

formEl.addEventListener("submit", handleFormSubmit);

const setTaskCompleted = (task, taskDiv) => {
  if (task.completed) {
    taskDiv.className = "completed";
  } else {
    taskDiv.className = "";
  }
};

const toggleTaskCompletedStatus = (task, taskDiv) => {
  task.completed = !task.completed;
  API.patchTask(task).then(task => {
    setTaskCompleted(task, taskDiv);
  });
};

const renderTasks = tasks => {
  tasks.forEach(task => renderTask(task));
};

const renderTask = task => {
  const taskDiv = document.createElement("div");

  taskDiv.innerText = task.text;

  setTaskCompleted(task, taskDiv);

  console.log(task);

  //   if (task.priority == )

  const prioritySpan = document.createElement("span");

  prioritySpan.innerText = PRIORITY_LABELS[task.priority];

  taskDiv.addEventListener("click", () =>
    toggleTaskCompletedStatus(task, taskDiv)
  );

  taskDiv.append(prioritySpan);

  tasksEl.append(taskDiv);
};

API.getTasks().then(tasks => renderTasks(tasks));
