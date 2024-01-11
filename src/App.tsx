import { useEffect } from 'react'
import styles from './App.module.css'
import { useQuizStore } from './store/quiz'

function App() {
  const fetchCountries = useQuizStore((state) => state.fetchCountries)
  const questions = useQuizStore((state) => state.questions)

  useEffect(() => {
    fetchCountries()
  }, [])

  console.log(questions)

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Country Quiz</h1>

      <div className={styles.quizCounter}>
        {questions.map((question, index) => (
          <div className={styles.quizButton} key={question.id}>
            {index + 1}
          </div>
        ))}
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
