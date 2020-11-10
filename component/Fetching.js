// import { useState, useEffect } from "react";
// const API = "https://restcountries.eu/rest/v2/all"
// function Fetching() {

//     const [value, setValue] = useState([]);
//     async function fetchingData() {
//         const data = await fetch(API);
//         const res = await data.json();
//         setValue(res);
//     }
//     useEffect(() => {
//         fetchingData();
//     }, [])

//     const item1 = Math.floor(Math.random() * value.length)
//     const item2 = Math.floor(Math.random() * value.length)
//     const item3 = Math.floor(Math.random() * value.length)
//     const item4 = Math.floor(Math.random() * value.length)
//     if (!value.length) {
//         return null;
//     }
//     console.log(value[item1].name);
//     console.log(value[item1].capital);
//     console.log(value[item1].flag);
//     const groupItems = [item1, item4, item2, item3]

//     return (value={value} setValue={setValue} item1 item2, item3, item4, groupItems)
// }

// export default Fetching;