import React from 'react'

const Counter = () => {
    const [count, setcount] = React.useState(0)
    
    // const increment = () => {
    //     setcount(count => count + 1)
    // }
    // const decrement = () => {
    //     setcount(count => count - 1)
    // }

    const changeVal = (e) => {
        console.log(e.target.className)
        if(e.target.className === "plus") {
            setcount(count + 1)
        }
        if(e.target.className === "minus") {
            setcount(count - 1)
        }
    }
    return (
        <div>
            <button className="plus" onClick={changeVal}>+</button>
            <br/>
            <button className="minus" onClick={changeVal}>-</button>
            <br/>
            <p>{count}</p>
        </div>
    )
}
export default Counter
