import React from "react";
import styles from "./App.module.css";
import { Task } from "./components/Task";
import { TaskItem } from "./models/TaskItem";

export default function App() {
  const [tasks, setTasks] = React.useState<TaskItem[]>([]);
  const [newTask, setNewTask] = React.useState<string>("");

  const isNewTaskFieldClear = newTask.trim() === "";

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    const task: TaskItem = {
      id: crypto.randomUUID(),
      description: newTask,
      createdAt: new Date(),
      isCompleted: false,
    };

    setTasks([...tasks, task]);

    setNewTask("");
  }

  function handleTaskDelete(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleTaskComplete(taskId: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }

        return task;
      })
    );
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
            value={newTask}
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
            <Task
              key={index}
              task={task}
              onDelete={handleTaskDelete}
              onComplete={handleTaskComplete}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
