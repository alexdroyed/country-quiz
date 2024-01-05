import styles from './App.module.css'
import { getData } from './hooks/getData'

function App() {
  const data = getData()

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Country Quiz</h1>

      <div className={styles.quizCounter}>
        <div className={styles.quizButton}>1</div>
        <div className={styles.quizButton}>2</div>
        <div className={styles.quizButton}>3</div>
        <div className={styles.quizButton}>4</div>
        <div className={styles.quizButton}>5</div>
        <div className={styles.quizButton}>6</div>
        <div className={styles.quizButton}>7</div>
        <div className={styles.quizButton}>8</div>
        <div className={styles.quizButton}>9</div>
        <div className={styles.quizButton}>10</div>
      </div>

      <p className={styles.question}>Which country is kuala lumpur?</p>

      <div className={styles.answers}>
        <button className={styles.answer}>answer 1</button>
        <button className={styles.answer}>answer 2</button>
        <button className={styles.answer}>answer 3</button>
        <button className={styles.answer}>answer 4</button>
      </div>
    </main>
  )
}

export default App
