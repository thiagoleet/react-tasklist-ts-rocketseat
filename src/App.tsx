import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.container}>
      <header>
        <h1>Task List</h1>
      </header>
      <div className={styles.formContainer}>
        <form>
          <input
            type="text"
            placeholder="Task"
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
      <footer></footer>
    </main>
  );
}
