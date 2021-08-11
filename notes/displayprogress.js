import React, { useState } from 'react';

const Display = () => {
    const [data, setData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }
    const handleOnChange = (e) => {
        const userInput = e.target.value
        setData(userInput)
        console.log(userInput)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleOnChange} value={data}></input>

                </form>
            </div>
        </>
    )
}

export default Display