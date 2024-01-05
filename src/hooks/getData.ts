import { useEffect, useState } from 'react'
import { Country } from '../types'
import { countriesSchema } from '../validations'

const API_ENDPOINT = 'https://restcountries.com/v3.1/all'

export function getData() {
  const [data, setData] = useState<Country[]>([])

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        const validatedData = countriesSchema.parse(data)
        const countriesCount = validatedData.length
        const limitInf = Math.floor(Math.random() * countriesCount - 10)
        const limitSup = limitInf + 10

        const slicedData = validatedData.slice(limitInf, limitSup)
        setData(slicedData)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return data
}
