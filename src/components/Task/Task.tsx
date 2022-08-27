import { IDados } from '../../App';

import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface Props {
  task: IDados;
  onDeleteTask: (taskId: string) => void;
  IsCompleteTask: (taskId:string) => void;
}


export function Task({task, onDeleteTask, IsCompleteTask}:Props) {
  return (
    <div className={styles.task}>
      <button className={ task.isComplete ? styles.checked : styles.check} onClick={() => IsCompleteTask(task.id)}>
          <div />
        </button>
      <p className={ task.isComplete ? styles.textCompleted : "" }>
        {task.task}
      </p>
      <button className={styles.deleteButton} onClick={() => onDeleteTask(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  )
}