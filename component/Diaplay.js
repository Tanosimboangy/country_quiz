import React, { useState } from "react";
 import ButtonToNext from "./ButtonToNext";

 function Display({value, collectionItems, item1, item2, item3, item4, fetchingData}) {

    const [correct, setCorrect] = useState(false);
    const [answered, setAnswered] = useState(false);

    function handleClickButton(e) {
        const el = e.target;
        setAnswered(true);
        if ((el.dataset.value) === (value[item1].name)) {
            el.classList.add("correct");
            setCorrect(true);
        } else {
            el.classList.add("answered");
            el.classList.add("correct");
            setAnswered(false);
        }
    }
    
    return (
        <>
            <div className="container">
                <h2>{value[item1].capital} is the capital of?</h2>
                {collectionItems.map(map => {
                    return (
                        <div key={value[map].name}>
                            <button 
                                value={value[map].name}
                                data-value={value[map].name}
                                onClick={handleClickButton}
                                className="buttons">
                                {value[map].name}<br />
                            </button>
                        </div>
                    )
                })}
            </div>
            {answered && 
                <ButtonToNext 
                fetchingData={fetchingData}
                correct={correct}
            />}
        </>
    )
}

export default Display;


{/* <div className="container">
    <img style={{maxWidth:"100%"}} src={value[item1].flag} />
    <h2>Which country does this flag belong to?</h2>
    {collectionItems.map(map => {
        return (
            <div key={value[map].name}>
                <button 
                    value={value[map].name}
                    onClick={(e) => console.log("I am here!")}
                    className="buttons">
                    {value[map].name}<br />
                </button>
        </div>
        )
    })}
</div> */}


// const API_CAPITAL = "https://restcountries.eu/rest/v2/capital/"
// // Declaration UseState with Fetching the data for the capital
// const [data, setData] = useState([]);
// async function fetchingCapitalData() {
//     const data = await fetch(API_CAPITAL);
//     const resp = await data.json()
//     setData(resp);
// }
// useEffect(() => {
//     fetchingCapitalData()
// }, [])
// console.log(data);