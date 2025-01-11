import React from "react";
import styles from "./App.module.css";
import { Task } from "./components/Task";

export default function App() {
  const [tasks, setTasks] = React.useState<string[]>([]);
  const [newTask, setNewTask] = React.useState<string>("");

  const isNewTaskFieldClear = newTask.trim() === "";

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
  }

  function handleTaskInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <main className={styles.container}>
      <header>
        <h1>Task List</h1>
      </header>
      <div className={styles.formContainer}>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Task"
            onChange={handleTaskInputChange}
          />
          <button
            type="submit"
            disabled={isNewTaskFieldClear}
          >
            Add Task
          </button>
        </form>
      </div>
      <div className={styles.taskList}>
        <ul>
          {tasks.map((task, index) => (
            <Task key={index} />
          ))}
        </ul>
      </div>
    </main>
  );
}
