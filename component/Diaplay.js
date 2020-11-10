import React
// { useEffect, useState }
 from "react";

// const API_CAPITAL = "https://restcountries.eu/rest/v2/capital/"

function Display({value, collectionItems, item1, item2, item3, item4, fetchingData}) {

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

    function handleClickButton(e) {
        console.log(e.currentTarget.value);
        console.log(value[item1].capital, "is the capital of", value[item1].name);
        console.log(value[item2].capital, "is the capital of", value[item2].name);
        console.log(value[item3].capital, "is the capital of", value[item3].name);
        console.log(value[item4].capital, "is the capital of", value[item4].name);

        // if (e.currentTarget.value === value[item1].capital) {
        //     console.log("It is true item1");
        // } else if (e.currentTarget.value === value[item2].capital) {
        //     console.log("It is true item2");
        // } else if (e.currentTarget.value === value[item3].capital) {
        //     console.log("It is true item3");
        // } else if (e.currentTarget.value === value[item4].capital) {
        //     console.log("It is true item4");
        // }
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
                                onClick={handleClickButton}
                                className="buttons">
                                {value[map].name}<br />
                            </button>
                        </div>
                    )
                    })}
            </div>
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
        </>
    )
}

export default Display;