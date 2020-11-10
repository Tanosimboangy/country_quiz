import React, { useState }
// { useEffect }
 from "react";
 import ButtonToNext from "./ButtonToNext";

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

    const [correct, setCorrect] = useState(false);
    const [answered, setAnswered] = useState(false);

    function handleClickButton(e) {
        setAnswered(true);
        console.log(e.target.dataset);
        if ((e.target.dataset.value) === (value[item1].name)) {
            e.target.classList.add("correct");
            setCorrect(true);
        } else {

            e.target.classList.add("incorrect")
            setAnswered(false);
        }
        
        // function handleAnswers (e) {
        //     setIsQuestionAnswered(true)
        //     if ((countriesName[randomNumber1].name) === (e.target.dataset.value)) {
        //     setIsAnswerCorrect(true)
        //     e.target.classList.add("correct")
        //     } else {
        //     const indexOfTheRightAnswer = arrOfSortedRandomNumber.find(index => {
        //         return countriesName[index].name === countriesName[randomNumber1].name
        //     })
        //     const rightAnswer = countriesName[indexOfTheRightAnswer].name
        //     setIsAnswerCorrect(false)
        //     e.target.classList.add("incorrect")
        //     const container = e.target.parentElement
        //     const buttons = Array.from(container.querySelectorAll("button"))
        //     const rightButton = buttons.find(button => button.dataset.value == rightAnswer)
        //     rightButton.classList.add("correct")
        //     }
        // }
    }
     console.log(correct);
    //  console.log(answered);
    
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
            {answered && 
                <ButtonToNext 
                fetchingData={fetchingData}
                correct={correct}
            />}
        </>
    )
}

export default Display;