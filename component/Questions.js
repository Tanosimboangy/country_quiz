import React from 'react'
import undraw_adventure from '../img/undraw_adventure.svg'

function Questions({ data, item1, fetchingData }) {
  // A variable that randomise the question displayed.
  const mathRandomQuestions = Math.floor(Math.random() * 2)


  return (
    <div>
      <img
        className='undraw_adventure'
        src={undraw_adventure}
        alt='this is an undraw adventure'
      />
      {mathRandomQuestions === 1 ? (
        <h2 className='capitale_question'>
          {data[item1].capital && data[item1].capital} is the capital of?
        </h2>
      ) : (
        <div>
          <img src={data[item1].flag} className='flag' />
          <h2 className='flag_question'>
            Which country does this flag belong to?
          </h2>
        </div>
      )}
    </div>
  )
}

export default Questions
