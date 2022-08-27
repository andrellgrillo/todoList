import { useState } from 'react';

import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'
import { Tasks } from './components/Tasks/Tasks'

import styles from './App.module.css';

import './global.css'

export type IDados = {
  id: string;
  isComplete: boolean;
  task: string
}

export function App() {
  const [tasks, setTasks] = useState<IDados[]>([
    {
      id: '1',
      isComplete: false,
      task: "Estudar modulos de CSS com Maykão na Maratona Explorer"
    },
    {
      id: '2',
      isComplete: true,
      task: "Ajudar o Pedro a criar um app para o RPG"
    }
  ])

  function handleAddTask(taskTask: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        isComplete: false,
        task: taskTask
      }
    ])
  }

  function handleDeleteTask(taskId: string) {
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasks(newTask)
  }

  function handleIsCompleteTask(taskId: string) {
    const newTask = tasks.map((task) => {
      if(task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });
    setTasks(newTask)
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask onAddTask={handleAddTask}/>
        <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} IsCompleteTask={handleIsCompleteTask}/>
      </div>
    </div>
  )
}

