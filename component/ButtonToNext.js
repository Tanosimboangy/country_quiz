import React from "react";
import {Link} from "react-router-dom";

function ButtonToNext({fetchingData, correct, setAnswered}) {
    function handleFetching() {
        fetchingData();
        setAnswered(false)
    }
    return (
        <>
            {correct ? 
                <button onClick={handleFetching}>Next</button>
            :
                <Link to="/restart">
                    <button>Next</button> 
                </Link>
            }
        </>
    )
}

export default ButtonToNext;