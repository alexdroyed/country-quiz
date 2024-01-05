import z from 'zod'
import { countrySchema } from './validations'

export type Country = z.infer<typeof countrySchema>
