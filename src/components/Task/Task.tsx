import { useFormatDate } from "../../hooks/useFormatDate";
import { TaskItem } from "../../models/TaskItem";
import styles from "./Task.module.css";

interface TaskProps {
  task: TaskItem;
  onDelete: (taskId: string) => void;
}

export const Task = ({ task, onDelete }: TaskProps) => {
  const [publishedDateFormated, publishedDateRelativeToNow, ISODate] =
    useFormatDate(task.createdAt);

  function handleDeleteClick() {
    onDelete(task.id);
  }

  return (
    <li
      className={styles.task}
      onClick={handleDeleteClick}
    >
      <p>{task.description}</p>
      <time
        title={publishedDateFormated}
        dateTime={ISODate}
      >
        Criada {publishedDateRelativeToNow}
      </time>
    </li>
  );
};
