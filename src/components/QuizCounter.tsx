import { useQuizStore } from '../store/quiz'
import styles from './QuizCounter.module.css'

export function QuizCounter() {
  const { questions, currentQuestion, changeCurrentQuestion } = useQuizStore(
    (state) => ({
      questions: state.questions,
      currentQuestion: state.currentQuestionIndex,
      changeCurrentQuestion: state.changeCurrentQuestion,
    })
  )

  const handleClick = (questionIndex: number) => {
    changeCurrentQuestion(questionIndex)
  }

  return (
    <>
      <div className={styles.quizCounter}>
        {questions.map((question, index) => {
          const isCurrentQuestion =
            currentQuestion === index ? styles.isSelected : ''
          return (
            <div
              onClick={() => handleClick(index)}
              className={`${styles.quizButton} ${isCurrentQuestion}`}
              key={question.id}
            >
              {index + 1}
            </div>
          )
        })}
      </div>
    </>
  )
}
