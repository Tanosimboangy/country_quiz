import React from 'react'
import Questions from './Questions'

function Displaycontent({
  correct,
  answered,
  setAnswered,
  handleClickButton,
  ButtonToNext,
  fetchingData,
  count,
  data,
  collectionItems,
  item1,
  setCount,
}) {
  return (
    <div>
      <div className='container'>
        <Questions data={data} item1={item1} fetchingData={fetchingData} />
        {collectionItems.map((map) => {
          return (
            <div key={data[map].name} className='button_container'>
              <button
                disabled={answered}
                type='button'
                value={data[map].name}
                data-value={data[map].name}
                onClick={handleClickButton}
                className='buttons'>
                {data[map].name}
                <br />
              </button>
            </div>
          )
        })}
        {answered && (
          <ButtonToNext
            count={count}
            fetchingData={fetchingData}
            correct={correct}
            setAnswered={setAnswered}
            setCount={setCount}
          />
        )}
      </div>
    </div>
  )
}

export default Displaycontent
