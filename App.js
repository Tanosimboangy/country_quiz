import React, { useEffect, useRef, useState } from 'react'
import Quizz from './component/quizz'
import Result from './component/results'
import check from './img/check_circle.svg'
import cancel from './img/cancel.svg'

function App() {
  const [countries, setCountries] = useState([])
  const [randomCountry, setRandomCountry] = useState({})
  const [randomAnswerOption, setRandomAnswerOption] = useState([])
  const [score, setScore] = useState(0)
  const [IsNext, setIsNext] = useState(false)
  const [IsResult, setIsResult] = useState(false)
  const [isAnswerShown, setIsAnswerShown] = useState(false)
  const [IsStart, setIsStart] = useState(false)
  const [number, setNumber] = useState(0)
  const title = useRef(null)
  const correctAnswer = useRef(null)

  async function fetchCountries() {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const country = await res.json()
    setCountries(country)
  }

  useEffect(() => {
    fetchCountries()
  }, [score])

  function getRandomCountry() {
    setIsStart(true)
    title.current.style.alignSelf = 'start'
    if (!countries.length) {
      return
    }
    const random = countries[Math.floor(Math.random() * countries.length)]
    const answerOption1 =
      countries[Math.floor(Math.random() * countries.length)]
    const answerOption2 =
      countries[Math.floor(Math.random() * countries.length)]
    const answerOption3 =
      countries[Math.floor(Math.random() * countries.length)]
    const answerOptions = [
      random.name,
      answerOption1.name,
      answerOption2.name,
      answerOption3.name,
    ]
    answerOptions.sort(() => {
      return 0.5 - Math.random()
    })

    setRandomCountry(random)
    setRandomAnswerOption(answerOptions)
  }

  function handleClick(e) {
    const event = e.target
    if (event.value === randomCountry.name) {
      setIsNext(true)
      event.style.backgroundColor = '#60BF88'
      event.style.color = 'white'
      event.style.borderColor = '#60BF88'
      event.style.backgroundImage = `url(${check})`
      event.style.backgroundRepeat = 'no-repeat'
      event.style.backgroundSize = '20px 20px'
      event.style.backgroundPosition = '95% center'
      setIsAnswerShown(true)
    } else {
      event.style.backgroundColor = '#EA8282'
      event.style.color = 'white'
      event.style.borderColor = '#EA8282'
      event.style.backgroundImage = `url(${cancel})`
      event.style.backgroundRepeat = 'no-repeat'
      event.style.backgroundSize = '20px 20px'
      event.style.backgroundPosition = '95% center'
      correctAnswer.current.style.backgroundColor = '#60BF88'
      correctAnswer.current.style.color = 'white'
      correctAnswer.current.style.borderColor = '#60BF88'
      correctAnswer.current.style.backgroundImage = `url(${check})`
      correctAnswer.current.style.backgroundRepeat = 'no-repeat'
      correctAnswer.current.style.backgroundSize = '20px 20px'
      correctAnswer.current.style.backgroundPosition = '95% center'
      setIsNext(true)
      setIsAnswerShown(false)
    }
  }

  function nextQuestion() {
    setNumber(Math.floor(Math.random() * 2))
    if (isAnswerShown) {
      getRandomCountry()
      setIsNext(false)
      setScore((prevScore) => prevScore + 1)
      correctAnswer.current.style.backgroundColor = 'transparent'
      correctAnswer.current.style.color = '#6066D0'
      correctAnswer.current.style.borderColor = '#6066D0'
    } else {
      setIsResult(true)
    }
  }

  return (
    <div className='app-container'>
      <h1 ref={title}>Country Quiz</h1>

      {IsStart ? (
        <div>
          {IsResult ? (
            <Result
              score={score}
              setIsResult={setIsResult}
              randomCountry={randomCountry}
              randomAnswerOption={randomAnswerOption}
              getRandomCountry={getRandomCountry}
              setScore={setScore}
              setIsNext={setIsNext}
            />
          ) : (
            <Quizz
              randomCountry={randomCountry}
              randomAnswerOption={randomAnswerOption}
              IsNext={IsNext}
              nextQuestion={nextQuestion}
              handleClick={handleClick}
              rightAnswer={correctAnswer}
              number={number}
            />
          )}
        </div>
      ) : (
        <button onClick={getRandomCountry} className='startBtn'>
          Start
        </button>
      )}
    </div>
  )
}

export default App
