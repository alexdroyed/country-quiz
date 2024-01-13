import styles from './Congrats.module.css'
import CongratsImage from '../assets/congrats.svg'
import { useQuizStore } from '../store/quiz'

export function Congrats() {
  const { fetchCountries, questions, changeCurrentQuestion } = useQuizStore(
    (state) => ({
      fetchCountries: state.fetchCountries,
      questions: state.questions,
      changeCurrentQuestion: state.changeCurrentQuestion,
    })
  )

  const correctAnswers = questions.filter(
    (question) => question.userAnswer === question.correctAnswer
  )

  const ResetHandler = () => {
    fetchCountries()
    changeCurrentQuestion(0)
  }

  return (
    <main className={styles.container}>
      <div className={styles.congratsContainer}>
        <img src={CongratsImage} alt='congrats' />
        <h2 className={styles.congratsTitle}>
          Congrats! You completed the quiz
        </h2>
        <p className={styles.congratsContent}>
          You answered {correctAnswers.length} / {questions.length} correctly
        </p>
        <button className={styles.congratsButton} onClick={ResetHandler}>
          Play again
        </button>
      </div>
    </main>
  )
}
