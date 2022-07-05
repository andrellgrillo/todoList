import { ListBullets } from 'phosphor-react';

import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <div className={styles.empty}>
        <ListBullets size={56} />
        <p className={styles.pHeader}>Você ainda não te tarefas cadastradas</p>
        <p className={styles.pSubHeader}>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}