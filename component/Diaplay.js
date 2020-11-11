import React, { useState } from "react";
 import ButtonToNext from "./ButtonToNext";
 import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

 function Display({
     value, 
     collectionItems, 
     item1, 
     fetchingData,
    }) {

    const [correct, setCorrect] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [count, setCount] = useState(0);

    function handleClickButton(e) {
        const el = e.target;
        setAnswered(true);
        if ((el.dataset.value) === (value[item1].name)) {
            el.classList.add("correct");
            setCorrect(true);
            setCount(prev => prev + 1);
        } else {
            el.classList.add("answered");
        }
    }
    return (
        <Router >
            <Switch>
                <Route exact path="/">
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
                </Route>
                <Route path="/restart">
                    <ButtonToNext 
                    count={count}
                    fetchingData={fetchingData}
                    correct={correct} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Display;

{/* <img style={{maxWidth:"100%"}} src={value[item1].flag} />
<h2>Which country does this flag belong to?</h2> */}

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