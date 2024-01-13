import { Country, Question } from '../types'

interface Props {
  countries: Country[]
  limit: number
}

export async function createQuestions({ countries, limit }: Props) {
  const questions: Question[] = []

  for (let i = 0; i < limit; i++) {
    const possibleCountries = countries
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)

    const chosenQuestion = possibleCountries[0]

    questions.push({
      id: `${chosenQuestion.name.common}-${chosenQuestion.region}-${i}`,
      question: `Which country is ${chosenQuestion.capital} the capital?`,
      correctAnswer: chosenQuestion.name.common,
      answers: possibleCountries
        .sort(() => Math.random() - 0.5)
        .map((country) => country.name.common),
      userAnswer: null,
    })
  }

  return questions
}
