import React, { useState } from 'react';
import Axios from 'axios'

const Display = () => {
    const [data, setData] = useState({city: "", country: ""});

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        // deconstruct the data object
        const {city, country} = data
        // check if city country are null or empty and retrun from function
        if (!city || !country || city.trim() === "" || country.trim() === "") return
        console.log("will call axios with city:", city, "country:", country)
        try {
            const result = await Axios({
                method: 'GET',
                url: `http://localhost:5000/api/weather?city=${country}&country=${country}`
            })
            console.log(result.data)
        } catch(err) {
            console.log(err.message)
        }
        

    }
    const handleOnChange = (e) => {
        // const userInput = e.target.value
        // console.log(userInput)
        const name = e.target.name
        const userInput = e.target.value
        console.log(name, userInput)
        const copiedData = {...data, [name]: userInput}
        setData(copiedData)
    }


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input name="city" type="text" onChange={handleOnChange} value={data.city}></input>
                    <input name="country" type="text" onChange={handleOnChange} value={data.country}></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        </>
    )
}

export default Display