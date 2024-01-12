import { create } from 'zustand'
import { getCountries } from '../services/getCountries'
import { Question } from '../types'
import { createQuestions } from '../utils/createQuestions'

interface State {
  questions: Question[]
  currentQuestionIndex: number
  fetchCountries: () => Promise<void>
  changeCurrentQuestion: (newCurrentQuestion: number) => void
  selectAnswer: (userAnswer: string, questionId: string) => void
}

export const useQuizStore = create<State>((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  fetchCountries: async () => {
    const countries = await getCountries()
    const questions = await createQuestions({ countries, limit: 10 })

    set({ questions })
  },
  changeCurrentQuestion: (newCurrentQuestion: number) => {
    set({ currentQuestionIndex: newCurrentQuestion })
  },
  selectAnswer: (userAnswer: string, questionId: string) => {
    const { questions } = get()

    const newQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          userAnswer,
        }
      }

      return question
    })

    set({ questions: newQuestions })
  },
}))
