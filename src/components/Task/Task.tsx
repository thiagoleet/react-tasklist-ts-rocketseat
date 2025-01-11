import { useFormatDate } from "../../hooks/useFormatDate";
import { TaskItem } from "../../models/TaskItem";
import styles from "./Task.module.css";

interface TaskProps {
  task: TaskItem;
}

export const Task = ({ task }: TaskProps) => {
  const [publishedDateFormated, publishedDateRelativeToNow, ISODate] =
    useFormatDate(task.createdAt);

  return (
    <li className={styles.task}>
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
