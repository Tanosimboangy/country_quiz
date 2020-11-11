import React from "react";
import { Link } from "react-router-dom";

function ButtonToNext({ fetchingData, correct, setAnswered }) {
    return (
        <>
            {correct ?
                <button className="btn_next" onClick={fetchingData}>Next</button>
                :
                <Link to="/restart">
                    <button className="btn_next">Next</button>
                </Link>
            }
        </>
    )
}

export default ButtonToNext;