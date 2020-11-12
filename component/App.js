import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Restart from "./Restart";
import Display from "./Display";

const API = "https://restcountries.eu/rest/v2/all";

function App() {

    const [value, setValue] = useState([]);
    const [count, setCount] = useState(0);
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

    if ((item1 === item2) || (item1 === item4) || (item2 === item3) || (item3 === item4) || (item1 === item3)) {
        return null
    }

    const groupItems = [item1, item4, item2, item3]
    const collectionItems = groupItems.sort((a, b) => b - a);
    return (
        <div className="principal_container">
            <h1>COUNTRY QUIZ</h1>
            <Router >
                <Switch>
                    <Route exact path="/">
                        <Display
                            value={value}
                            collectionItems={collectionItems}
                            count={count}
                            setCount={setCount}
                            item1={item1}
                            item2={item2}
                            item3={item3}
                            item4={item4}
                            setValue={setValue}
                            fetchingData={fetchingData}
                        />
                    </Route>
                    <Route path="/restart">
                        <div className="container">
                            <Restart
                                count={count}
                                setCount={setCount}
                                fetchingData={fetchingData}
                            />
                        </div>
                    </Route>
                </Switch>
            </ Router>
        </div>
    )
}
export default App;