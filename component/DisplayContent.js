import React from "react";
import undraw_adventure from "../img/undraw_adventure.svg";

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
    setCount, }) {

    // A variable that randomise the question displayed.
    const MathRandomQuestions = Math.floor(Math.random() * 3);
    if ((!data[item1].capital) || (!data[item1].flag)) {
        fetchingData()
    }

    return (
        <div>
            <div className="container">
                <img className="undraw_adventure" src={undraw_adventure} alt="this is an undraw adventure" />
                {MathRandomQuestions === 0  
                    ? (<div>
                        <img src={data[item1].flag} className="flag" />
                        <h2 className="flag_question">Which country does this flag belong to?</h2>
                    </div>)
                    : 
                    <h2 className="capitale_question">{data[item1].capital && data[item1].capital} is the capital of?</h2>
                }
                {collectionItems.map(map => {
                    return (
                        <div
                            key={data[map].name}
                            className="button_container"
                        >
                            <button
                                disabled={answered}
                                value={data[map].name}
                                data-value={data[map].name}
                                onClick={handleClickButton}
                                className="buttons"
                            >
                                {data[map].name}<br />
                            </button>
                        </div>
                    )
                })}
                {answered && <ButtonToNext
                    count={count}
                    fetchingData={fetchingData}
                    correct={correct}
                    setAnswered={setAnswered}
                    setCount={setCount}
                />}
            </div>
        </div>
    )
}

export default Displaycontent;

