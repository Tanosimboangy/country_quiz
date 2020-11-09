import React, { useState, useEffect } from "react";

function App() {

    const [value, setValue] = useState([]);
    async function fetchingData() {
        const data = await fetch("https://restcountries.eu/rest/v2/all");
        const res = await data.json();
        setValue(res);
    }
    useEffect(() => {
        fetchingData();
    }, [])

    function randomItem(items = []) {
        return items[Math.floor(Math.random() * items.length)];
    }
      
    const randomOpt1 = randomItem(value);
    console.log(randomOpt1);
      

    return (
        <div>
            <button>button</button>
        </div>
    )
}

export default App;