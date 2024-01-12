import { useQuizStore } from '../store/quiz'
import styles from './Question.module.css'

export function Question() {
  const questions = useQuizStore((state) => state.questions)
  const currentQuestion = useQuizStore((state) => state.currentQuestion)

  const answers = questions[currentQuestion].answers
  return (
    <>
      <p className={styles.question}>{questions[currentQuestion].question}</p>

      <div className={styles.answers}>
        {answers.map((answer) => (
          <button className={styles.answer}>{answer}</button>
        ))}
      </div>
    </>
  )
}
