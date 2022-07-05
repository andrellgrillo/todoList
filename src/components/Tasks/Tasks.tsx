
import { TaskList } from '../TaskList/TaskList';
import styles from './Tasks.module.css';


export function Tasks() {
  return (
      <div className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.created}>
            Tarefas criadas
            <span>0</span>
          </div>
          <div className={styles.done}>
            Concluídas
            <span>0</span>
          </div>
        </div>
        <TaskList />
      </div>
  )
}