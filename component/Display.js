import React, { useState } from "react";
import ButtonToNext from "./ButtonToNext";
import DisplayContent from "./DisplayContent";

function Display({ value, collectionItems, item1, fetchingData, count, setCount }) {

    const [correct, setCorrect] = useState(false);
    const [answered, setAnswered] = useState(false);

    function handleClickButton(e) {
        setAnswered(true);
        if ((e.target.dataset.value) === (value[item1].name)) {
            e.target.classList.add("true");
            setCorrect(true);
        } else if ((e.target.dataset.value) !== (value[item1].name)) {
            setCorrect(false);
            e.target.classList.add("responded");
            const rightButton = value[collectionItems.find(item => {
                return value[item].name === value[item1].name;
            })].name;
            console.log(rightButton);
        }
    }

    return (
        <>
            <DisplayContent
                correct={correct}
                answered={answered}
                setAnswered={setAnswered}
                handleClickButton={handleClickButton}
                ButtonToNext={ButtonToNext}
                fetchingData={fetchingData}
                count={count}
                setCount={setCount}
                value={value}
                collectionItems={collectionItems}
                item1={item1}
            />
        </>
    )
}

export default Display;

