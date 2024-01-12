import { useQuizStore } from '../store/quiz'
import CorrectIcon from '../assets/Check_round_fill.svg'
import WrongIcon from '../assets/Close_round_fill.svg'

export function AnswerIcon({ answer }: { answer: string }) {
  const { questions, currentQuestionIndex } = useQuizStore((state) => ({
    questions: state.questions,
    currentQuestionIndex: state.currentQuestionIndex,
  }))
  const currentQuestion = questions[currentQuestionIndex]

  if (
    currentQuestion.userAnswer === null ||
    (currentQuestion.userAnswer !== answer &&
      currentQuestion.correctAnswer !== answer)
  )
    return

  if (
    currentQuestion.correctAnswer === answer &&
    currentQuestion.userAnswer !== answer
  ) {
    return <img src={CorrectIcon} alt='correct_icon' />
  }

  return currentQuestion.userAnswer === currentQuestion.correctAnswer ? (
    <img src={CorrectIcon} alt='correct_icon' />
  ) : (
    <img src={WrongIcon} />
  )
}
