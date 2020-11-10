import React from "react";
import {Link} from "react-dom";

function ButtonToNext({fetchingData, correct}) {
    return (
        <>
    {correct ? 
      <button onClick={fetchingData} >
        Next
      </button> :
      <Link to="/tryAgain">
        <button className="next">Next</button>
      </Link>
    }
    </>
    )
}

export default ButtonToNext;