import { PlusCircle} from 'phosphor-react';

import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <form className={styles.newTaskForm}>
      <input type="text" name="newtask" placeholder="Adicione uma nova Tarefa" />
      <button type="submit">
        Criar
        <span>
          <PlusCircle size={20} />
        </span>
      </button>
    </form>
  )
}