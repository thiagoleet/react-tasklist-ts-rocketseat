import { Check, Trash } from "@phosphor-icons/react";
import { useFormatDate } from "../../hooks/useFormatDate";
import { TaskItem } from "../../models/TaskItem";
import styles from "./Task.module.css";

interface TaskProps {
  task: TaskItem;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export const Task = ({ task, onDelete, onComplete }: TaskProps) => {
  const [publishedDateFormated, publishedDateRelativeToNow, ISODate] =
    useFormatDate(task.createdAt);

  function handleDeleteClick() {
    onDelete(task.id);
  }

  function handleCompleteClick() {
    onComplete(task.id);
  }

  return (
    <li
      className={[styles.task, task.isCompleted ? styles.completed : ""].join(
        " "
      )}
    >
      <div className={styles.content}>
        <p>{task.description}</p>
        <div className={styles.actions}>
          <button
            type="button"
            aria-label="Edit task"
            title="Edit task"
            role="complete"
            onClick={handleCompleteClick}
            disabled={task.isCompleted}
          >
            <Check />
          </button>
          <button
            type="button"
            aria-label="Delete task"
            title="Delete task"
            role="delete"
            onClick={handleDeleteClick}
            disabled={task.isCompleted}
          >
            <Trash />
          </button>
        </div>
      </div>

      <time
        title={publishedDateFormated}
        dateTime={ISODate}
      >
        Criada {publishedDateRelativeToNow}
      </time>
    </li>
  );
};
