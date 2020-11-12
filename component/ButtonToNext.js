import React from "react";
import { Link } from "react-router-dom";

function ButtonToNext({ fetchingData, correct, setCount, setAnswered }) {
    function handleClickNext() {
        // Rerun the fetching function again 
        fetchingData();
        // Running the increment counter
        setCount(prev => prev + 1);
        // Setting the setAnswered into fasle so the start button does not show untill the user clicks on of the four buttons
        setAnswered(false);
    }
    // Rendering either of these button according to the answer
    return (
        <>
            {correct ?
                // If the user clicks the right button with the right answer, display this first next button
                <button className="btn_next" onClick={handleClickNext}>Next</button>
                :
                // However if the user clicks incorrect button, display this second next button
                <Link to="/restart">
                    <button className="btn_next">Next</button>
                </Link>
            }
        </>
    )
}

export default ButtonToNext;