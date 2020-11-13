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
    value,
    collectionItems,
    item1,
    setCount, }) {

    // A variable that randomise the question displayed.
    const MathRandom = Math.floor(Math.random() * 2);
    // if ((!value[item1].capital) || (!value[item1].flag)) {
    //     fetchingData()
    // }

    return (
        <div>
            <div className="container">
                <img className="undraw_adventure" src={undraw_adventure} alt="this is an undraw adventure" />
                {MathRandom === 0
                    ? <h2 className="capitale_question">{value[item1].capital ? value[item1].capital : ""} is the capital of?</h2>
                    : (<div >
                        <img src={value[item1].flag} className="flag" />
                        <h2 className="flag_question">Which country does this flag belong to?</h2>
                    </div>)
                }
                {collectionItems.map(map => {
                    return (
                        <div
                            key={value[map].name}
                            className="button_container"
                        >
                            <button
                                disabled={answered}
                                value={value[map].name}
                                data-value={value[map].name}
                                onClick={handleClickButton}
                                className="buttons"
                            >
                                {value[map].name}<br />
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

