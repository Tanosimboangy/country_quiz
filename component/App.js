import React, { useState, useEffect } from "react";
const API = "https://restcountries.eu/rest/v2/all"
function App() {

    const [value, setValue] = useState([]);
    async function fetchingData() {
        const data = await fetch(API);
        const res = await data.json();
        setValue(res);
    }
    useEffect(() => {
        fetchingData();
    }, [])

    const item1 = Math.floor(Math.random() * value.length)
    const item2 = Math.floor(Math.random() * value.length)
    const item3 = Math.floor(Math.random() * value.length)
    const item4 = Math.floor(Math.random() * value.length)
    if (!value.length) {
        return null;
    }
    console.log(value[item1].name);
    console.log(value[item1].capital);
    console.log(value[item1].flag);
    const groupItems = [item1, item4, item2, item3]
    // const collectionItems = groupItems.sort((a, b) => b - a);

    return (
        <div className="container">
            <h2>{value[item1].capital} is the capital of?</h2>
            {/* <img style={{maxWidth:"100%"}} src={value[item1].flag} />
            <h2>Which country does this flag belong to?</h2> */}
            {groupItems.map(map => {
                return (
                    <div key={value[map].name}>
                        <button className="buttons">
                            {value[map].name}
                        </button>   
                    </div>
                )
                })}
        </div>
    )
}

export default App;