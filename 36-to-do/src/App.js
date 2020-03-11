import React from "react";
import "./App.css";
import { CATEGORIES } from "./data";
import CategoryFilterButtons from "./components/CategoryFilterButtons";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";

class App extends React.Component {
  state = {
    selectedCategory: CATEGORIES[0],
    tasks: [
      {
        text: "Buy rice",
        category: "Food"
      },
      {
        text: "Save a tenner",
        category: "Money"
      },
      {
        text: "Build a todo app",
        category: "Code"
      },
      {
        text: "Build todo API",
        category: "Code"
      },
      {
        text: "Get an ISA",
        category: "Money"
      },
      {
        text: "Cook rice",
        category: "Food"
      },
      {
        text: "Tidy house",
        category: "Misc"
      }
    ]
  };
  setSelectedCategory = category => {
    this.setState({
      selectedCategory: category
    });
  };

  filterTasks = (tasks, selectedCategory) => {
    return selectedCategory === CATEGORIES[0]
      ? tasks
      : tasks.filter(task => {
          return task.category === selectedCategory;
        });
  };

  addTask = (text, category) => {
    console.log(text, category);
    const newTask = {
      text,
      category
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  render() {
    const filteredTasks = this.filterTasks(
      this.state.tasks,
      this.state.selectedCategory
    );

    const catgoriesForForm = CATEGORIES.slice(1, CATEGORIES.length);

    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilterButtons
          categories={CATEGORIES}
          selectedCategory={this.state.selectedCategory}
          setSelectedCategory={this.setSelectedCategory}
        />
        <NewTaskForm addTask={this.addTask} categories={catgoriesForForm} />
        <TaskList tasks={filteredTasks} />
      </div>
    );
  }
}

export default App;
