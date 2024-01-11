import { Country } from '../types'

interface Props {
  countries: Country[]
  limit: number
}

const question = {
  askForFlag: (country: Country) =>
    `Which country does this flag ${country.flags.svg} belong to?`,
  askForCapital: (country: Country) =>
    `Which country is ${country.capital} the capital?`,
}

export async function createQuestions({ countries, limit }: Props) {
  const questions = []

  for (let i = 0; i < limit; i++) {
    const possibleCountries = countries
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)

    const chosenQuestion = possibleCountries[0]

    const askFor = chosenQuestion.capital ? 'askForCapital' : 'askForFlag'

    questions.push({
      id: `${chosenQuestion.name.common}-${chosenQuestion.region}-${i}`,
      question: question[askFor](chosenQuestion),
      correctAnswer: chosenQuestion.name.common,
      answers: possibleCountries.map((country) => country.name.common),
    })
  }

  return questions
}
