import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Restart from "./Restart";
import Display from "./Display";

const API = "https://restcountries.eu/rest/v2/all";

function App() {
    // States for storing the data from fetch.
    const [data, setData] = useState([]);
    // States for setting up the counter.
    const [count, setCount] = useState(0);

    // Fething the data and store it inside of state above.
    async function fetchingData() {
        const data = await fetch(API);
        const res = await data.json();
        setData(res);
    }
    useEffect(() => {
        fetchingData();
    }, [])

    // Creating four random variables for the four value to display.
    const item1 = Math.floor(Math.random() * data.length)
    const item2 = Math.floor(Math.random() * data.length)
    const item3 = Math.floor(Math.random() * data.length)
    const item4 = Math.floor(Math.random() * data.length)

    if (
        !data.length ||
        item1 === item2 ||
        item1 === item3 ||
        item1 === item4 ||
        item2 === item3 ||
        item2 === item4 ||
        item3 === item4
    ) {
        return null
    }

    // Grouping all of the items.
    const groupItems = [item1, item4, item2, item3]
    // Sorting the items in order to avoid getting the same data over again.
    const collectionItems = groupItems.sort((a, b) => b - a);

    return (
        <div className="principal_container">
            <h1>COUNTRY QUIZ</h1> 
            <Router >
                <Switch>
                    <Route exact path="/">
                        <Display
                            data={data}
                            setData={setData}
                            collectionItems={collectionItems}
                            count={count}
                            setCount={setCount}
                            item1={item1}
                            item2={item2}
                            item3={item3}
                            item4={item4}
                            fetchingData={fetchingData}
                        />
                    </Route>
                    <Route path="/restart">
                        <div className="container"><Restart count={count} setCount={setCount} fetchingData={fetchingData} /></div>
                    </Route>
                </Switch>
            </ Router>
        </div>
    )
}
export default App;