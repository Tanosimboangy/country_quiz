import React, { useState } from "react";
import ButtonToNext from "./ButtonToNext";
import Displaycontent from "./Displaycontent";

function Display({ value, collectionItems, item1, fetchingData, count, setCount }) {

    // State for checking whether the answer is correct or not
    const [correct, setCorrect] = useState(false);
    // State for checking whether the has anwered or not
    const [answered, setAnswered] = useState(false);
    const [rightColor, setRightColor] = useState(false);

    // Function for setting the condition whether the user has answered or not yet 
    // Function for setting the condition whether the answer is correct or incorrect 
    function handleClickButton(e) {
        setAnswered(true);
        if ((e.target.dataset.value) === (value[item1].name)) {
            e.target.classList.add("true");
            setCorrect(true);
        } else if ((e.target.dataset.value) !== (value[item1].name)) {
            setCorrect(false);
            e.target.classList.add("responded");
            // Getting the right button with the right answer
            // const rightButton = value[collectionItems.find(item => {
            //     return value[item].name === value[item1].name;
            // })].name;
            // console.log(rightButton);
            // rightButton.style.backgroundColor = "true"
            setRightColor(true);
        }
    }

    return (
        <>
            <Displaycontent
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
                rightColor={rightColor}
            />
        </>
    )
}

export default Display;

