import { create } from 'zustand'
import { getCountries } from '../services/getCountries'
import { Question } from '../types'
import { createQuestions } from '../utils/createQuestions'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchCountries: () => Promise<void>
}

export const useQuizStore = create<State>((set) => ({
  questions: [],
  currentQuestion: 0,
  fetchCountries: async () => {
    const countries = await getCountries()
    const questions = await createQuestions({ countries, limit: 10 })

    set({ questions })
  },
  changeCurrentQuestion: (newCurrentQuestion: number) => {
    set({ currentQuestion: newCurrentQuestion })
  },
}))