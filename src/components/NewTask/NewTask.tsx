import { PlusCircle} from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './NewTask.module.css';

interface Props {
  onAddTask: (taskTask:string) => void;
}

export function NewTask({onAddTask}: Props) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event:ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <form className={styles.newTaskForm} onSubmit={handleSubmit}>
      <input type="text" name="newtask" placeholder="Adicione uma nova Tarefa" onChange={onChangeTitle} value={title} />
      <button type="submit">
        Criar
        <span>
          <PlusCircle size={20} />
        </span>
      </button>
    </form>
  )
}