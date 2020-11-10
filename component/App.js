import React, { useState, useEffect } from "react";
import Display from "./Diaplay";
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
    const groupItems = [item1, item4, item2, item3]
    const collectionItems = groupItems.sort((a, b) => b - a);

    return (
        <Display value={value} collectionItems={collectionItems} item1={item1} item2={item2} item3={item3} item4={item4} setValue={setValue} fetchingData={fetchingData} />
    )
}

export default App;