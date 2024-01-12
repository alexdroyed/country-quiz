import { useEffect } from 'react'
import styles from './App.module.css'
import { useQuizStore } from './store/quiz'
import { Question } from './components/Question'
import { QuizCounter } from './components/QuizCounter'

function App() {
  const { fetchCountries, questions } = useQuizStore((state) => ({
    fetchCountries: state.fetchCountries,
    questions: state.questions,
  }))

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Country Quiz</h1>
      <QuizCounter />
      {questions.length && <Question />}
    </main>
  )
}

export default App
