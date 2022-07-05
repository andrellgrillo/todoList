
import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'
import { Tasks } from './components/Tasks/Tasks'

import styles from './App.module.css';

import './global.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <Tasks />
      </div>
    </div>
  )
}

export default App
