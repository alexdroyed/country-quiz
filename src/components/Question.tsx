import { useQuizStore } from '../store/quiz'
import { AnswerIcon } from './AnswerIcon'
import styles from './Question.module.css'

export function Question() {
  const { questions, selectAnswer, currentQuestionIndex } = useQuizStore(
    (state) => ({
      questions: state.questions,
      selectAnswer: state.selectAnswer,
      currentQuestionIndex: state.currentQuestionIndex,
    })
  )

  const currentQuestion = questions[currentQuestionIndex]

  const answers = currentQuestion.answers

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    selectAnswer(event.currentTarget.id, currentQuestion.id)
  }

  return (
    <>
      <p className={styles.question}>{currentQuestion.question}</p>

      <div className={styles.answers}>
        {answers.map((answer) => {
          const isSelectedAnswer =
            answer === currentQuestion.userAnswer ? styles.selectedAnswer : ''
          return (
            <button
              disabled={currentQuestion.userAnswer !== null}
              className={`${styles.answer} ${isSelectedAnswer}`}
              onClick={handleClick}
              id={answer}
              key={answer}
            >
              <AnswerIcon answer={answer} />
              {answer}
            </button>
          )
        })}
      </div>
    </>
  )
}
