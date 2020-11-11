import React from "react";
import {Link} from "react-dom";

function ButtonToNext({fetchingData, correct}) {
    return (
        <>
            {correct ? 
                <button onClick={fetchingData}>Next</button>
            :
                <Link to="/restart">
                    <button>Next</button> 
                </Link>
            }
        </>
    )
}

export default ButtonToNext;