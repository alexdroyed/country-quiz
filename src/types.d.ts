import z from 'zod'
import { countrySchema } from './validations'

export type Country = z.infer<typeof countrySchema>

export type Question = {
  id: string
  question: string
  correctAnswer: string
  userAnswer: string | null
  answers: string[]
}
