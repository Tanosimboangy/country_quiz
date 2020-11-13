import React, { useState } from "react";
import ButtonToNext from "./ButtonToNext";
import Displaycontent from "./Displaycontent";

function Display({ value, collectionItems, item1, fetchingData, count, setCount }) {
    
    // State for checking whether the user's answer is correct or not.
    const [correct, setCorrect] = useState(false);
    // State for checking whether the user has anwered or not.
    const [answered, setAnswered] = useState(false);

    // Function for setting the condition whether the user has answered or not yet.
    // Function for setting the condition whether the answer is correct or incorrect.
    function handleClickButton(e) {
        setAnswered(true);
        if ((e.target.dataset.value) === (value[item1].name)) {
            // If the condition is true, add this "true" class and set this setCorrect function into true.
            e.target.classList.add("true_answer");
            setCorrect(true);
        } else if ((e.target.dataset.value) !== (value[item1].name)) {
            // If the condition is true, add this "responded" class and set this setCorrect function into false.
            e.target.classList.add("false_answer");
            setCorrect(false);
            // Finding the correct answer so that I can grab the button.
            const rightButton = value[collectionItems.find(item => {
                return value[item].name === value[item1].name;
            })].name;
            // Grab all of the buttons in order to find the correct one.
            const buttons = Array.from(document.querySelectorAll(".buttons"));
            // Finding the button by comparing the the value of the buttons and the correct value.
            const correctBtn = buttons.find(button => button.dataset.value == rightButton)
            // Adding this class on the rigth button when the user clicks the wrong button.
            correctBtn.classList.add("true_answer");
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
            />
        </>
    )
}

export default Display;

