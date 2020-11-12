import React, { useState } from "react";
import ButtonToNext from "./ButtonToNext";
function Display({ value, collectionItems, item1, fetchingData, count, setCount }) {
const [correct, setCorrect] = useState(false);
const [answered, setAnswered] = useState(false);

    function handleClickButton(e) {
        setAnswered(true);
        if ((e.target.dataset.value) === (value[item1].name)) {
            e.target.classList.add("true");
            setCorrect(true);
        } else if ((e.target.dataset.value) !== (value[item1].name)){
            setCorrect(false);
            e.target.classList.add("responded");
            const rightButton = value[collectionItems.find(item => {
                return value[item].name === value[item1].name;
            })].name;
            console.log(rightButton);
        }
    }
    const random = Math.floor(Math.random() * 4);
    if ((!value[item1].capital) || (!value[item1].flag)) {
        fetchingData()
    } 
    return (
        <>
            <h1>COUNTRY QUIZ</h1>
            <div className="container">
                {random === 0
                    ? <h2>{value[item1].capital ? value[item1].capital : ""} is the capital of?</h2>
                    : (<div>
                        <img src={value[item1].flag} className="flag" />
                        <h2>Which country does this flag belong to?</h2>
                    </div>)
                }
                {collectionItems.map(map => {
                    return (
                        <div key={value[map].name}>
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
        </>
    )
}

export default Display;

