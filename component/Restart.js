import React from "react";

function Restart({fetchingData}) {
    return (
        <div>
            <Link to="/">
                <button onClick={ fetchingData }>
                    Try again
                </button>
            </Link>
        </div>
    )
}

export default Restart;