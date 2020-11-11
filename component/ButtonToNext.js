import React from "react";
import {Link} from "react-dom";

function ButtonToNext({fetchingData, correct, count}) {
    console.log(count);
    return (
        <>
            {correct ? 
            <button onClick={fetchingData} className="btn_next" >
                Next
            </button> 
            :
            <Link to="/restart">
                <button onClick={fetchingData} className="btn_next" >
                    Next
                </button> 
            </Link>
            }
        </>
    )
}

export default ButtonToNext;