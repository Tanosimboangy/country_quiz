import React, { useState } from "react";
import ButtonToNext from "./ButtonToNext";

function Display({ value, collectionItems, item1, fetchingData, count, setCount }) {

    const [correct, setCorrect] = useState(false);
    const [answered, setAnswered] = useState(false);

    function handleClickButton(e) {
        // const allbtn = Array.from(e.target.parentElement.querySelectorAll(".buttons"))
        // allbtn.map(item => item.setAttribute("disabled", ""))
        setAnswered(true);
        if ((e.target.dataset.value) === (value[item1].name)) {
            e.target.classList.add("correct");
            setCorrect(true);
            setCount(prev => prev + 1);
        } else {
            setCorrect(false);
            e.target.classList.add("answered");
            // setAnswered(false);
            // const correctAsnwer = collectionItems.find(item => {
            //     return value[item].name == value[item1].name
            // })
            // const trueAnswer = value[correctAsnwer].name
            // const selected = allbtn.find(item => item.dataset.value === trueAnswer)
            // selected.classList.add("correct")
        }
    }
    console.log(count);
    const random = Math.floor(Math.random() * 2);
    return (
        <>
            <h1>COUNTRY QUIZ</h1>
            <div className="container">
                {random === 0
                    ? <h2>{value[item1].capital && value[item1].capital} is the capital of?</h2>
                    : (<div>
                        <img src={value[item1].flag} className="flag" />
                        <h2>Which country does this flag belong to?</h2>
                    </div>)
                }
                {collectionItems.map(map => {
                    return (
                        <div key={value[map].name}>
                            <button
                                value={value[map].name}
                                data-value={value[map].name}
                                onClick={handleClickButton}
                                className="buttons">
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
                />}

            </div>
        </>
    )
}

export default Display;

