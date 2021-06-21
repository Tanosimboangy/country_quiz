import React from 'react'
import image from '../img/undraw_winners.svg'

function Result({ score, setIsResult, getRandomCountry, setScore, setIsNext }) {
  function handleClickBtn() {
    setIsResult(false)
    setScore(0)
    getRandomCountry()
    setIsNext(false)
  }
  return (
    <div className='result_container'>
      <img className='result_image' src={image} />
      <h2 className='result_title'>Results</h2>
      <p className='result_text'>
        You got <span>{score}</span> correct answers
      </p>
      <button className='tryAgainBtn' onClick={handleClickBtn}>
        Try again
      </button>
    </div>
  )
}

export default Result
