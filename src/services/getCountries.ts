import { Country } from '../types'
import { countriesSchema } from '../validations'

const API_ENDPOINT = 'https://restcountries.com/v3.1/all'

export async function getCountries(): Promise<Country[]> {
  try {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    const validatedData = countriesSchema.parse(data)

    const slicedData = validatedData
      .sort(() => Math.random() - 0.5)
      .slice(0, 80)
      .filter((country) => country.capital !== null)

    return slicedData
  } catch (error) {
    console.log(error)
    return []
  }
}
