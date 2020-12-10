import React from "react";
import { Link } from 'react-router-dom';
import undraw_adventure from "../img/undraw_adventure.svg";
import undraw_winners from "../img/undraw_winners.svg";

function Restart({ fetchingData, count, setCount }) {
    // Function that reruns the fetchingData() function and setting the setCount() function back to zero.
    function handleRestart() {
        fetchingData();
        setCount(0);
    }
    return (
        <div className="restart">
            <img className="undraw_adventure" src={undraw_adventure} alt="this is an undraw adventure" />
            <img className="undraw_winners" src={undraw_winners} alt="this is an undraw winners" />
            <h2>Result</h2>
            <p>You got <b style={{color:"green"}}>{count}</b> correct answers</p>
            <Link to="/">
                <button className="btn_tryAigain" onClick={handleRestart}>
                    Try again
                </button>
            </Link>
        </div>
    )
}
export default Restart;
