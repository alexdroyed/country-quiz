import { useEffect } from 'react'
import styles from './App.module.css'
import { useQuizStore } from './store/quiz'
import { Question } from './components/Question'
import { QuizCounter } from './components/QuizCounter'
import { Congrats } from './components/Congrats'

function App() {
  const { fetchCountries, questions } = useQuizStore((state) => ({
    fetchCountries: state.fetchCountries,
    questions: state.questions,
  }))

  const areAllAnswered = questions.every(
    (question) => question.userAnswer !== null
  )

  useEffect(() => {
    fetchCountries()
  }, [])

  if (areAllAnswered && questions.length) {
    return <Congrats />
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Country Quiz</h1>
      <QuizCounter />
      {questions.length && <Question />}
    </main>
  )
}

export default App
