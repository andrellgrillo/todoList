import { ClipboardText } from 'phosphor-react';
import { IDados } from '../../App';
import { Task } from '../Task/Task';
import styles from './Tasks.module.css';

interface Props {
  tasks: IDados[];
  onDeleteTask: (taskId: string) => void;
  IsCompleteTask: (taskId: string) => void;
}

export function Tasks({tasks, onDeleteTask, IsCompleteTask}: Props) {
  const qTasks = tasks.length
  const cTasks = tasks.filter((task) => task.isComplete).length
  return (
      <div className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.created}>
            Tarefas criadas
            <span>{qTasks}</span>
          </div>
          <div className={styles.done}>
            Concluídas
            <span>{cTasks} de {qTasks}</span>
          </div>
        </div>
        <div className={styles.list}>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDeleteTask={onDeleteTask} IsCompleteTask={IsCompleteTask} />
          ))}
          
          {tasks.length <= 0 && (
            <section className={styles.empty}>
              <ClipboardText size={50} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </section>
          )}

        </div>
      </div>
  )
}