import z from 'zod'

export const countrySchema = z.object({
  capital: z.array(z.string()).nullish(),
  continents: z.array(z.string()),
  flags: z.object({
    svg: z.string(),
  }),
  languages: z.record(z.string(), z.string()).nullish(),
  region: z.string(),
  name: z.object({
    common: z.string(),
  }),
})

export const countriesSchema = z.array(countrySchema)
