import React, { useState, useEffect } from "react";

// Choosing the right API
// Fetch the data from that API
// Specify the name and the capital of the country

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
    const randomIndex1 = Math.floor(Math.random() * value.length);
    console.log(randomIndex1);
    // const randomIndex2 = Math.floor(Math.random() * value.length);
    // const randomIndex3 = Math.floor(Math.random() * value.length);
    // const randomIndex4 = Math.floor(Math.random() * value.length);
    return (
        <>
            {randomIndex1.map(item => {
                <h1>{item.name}</h1>
            })}
        </>
    )
}

export default App;

