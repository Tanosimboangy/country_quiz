import React from "react";
import { Link } from 'react-router-dom'

function Restart({fetchingData, count}) {
    return (
        <div className="restart">
            <h2>Result</h2>
            <p>You got {count} correct answers</p>
            <Link to="/">
                <button onClick={fetchingData}>
                    Try again
                </button>
            </Link>
        </div>
    )
}
export default Restart;
