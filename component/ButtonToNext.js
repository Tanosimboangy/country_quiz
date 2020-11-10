import React from "react";
import {Link} from "react-dom";

function ButtonToNext({fetchingData, correct}) {
    return (
        <>
            {correct ? 
            <button onClick={fetchingData} >
                Next
            </button> 
            :
            <Link to="/restart">
                <Restart fetchingData={fetchingData} />
            </Link>
            }
        </>
    )
}

export default ButtonToNext;