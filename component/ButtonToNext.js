import React from "react";
import { Link } from "react-router-dom";

function ButtonToNext({ fetchingData, correct, setCount, setAnswered }) {
    function handleClickNext() {
        fetchingData();
        setCount(prev => prev + 1);
        setAnswered(false);
    }
    // I the user clicks the right button with the right answer, then turn the first next button, ontherwise turn the other way around
    return (
        <>
            {correct ?
                <button className="btn_next" onClick={handleClickNext}>Next</button>
                :
                <Link to="/restart">
                    <button className="btn_next">Next</button>
                </Link>
            }
        </>
    )
}

export default ButtonToNext;