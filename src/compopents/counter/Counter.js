import React from 'react'

const Counter = () => {
    const [count, setcount] = React.useState(0)
    
    const increment = () => {
        setcount(count => count + 1)
    }
    const decrement = () => {
        setcount(count => count - 1)
    }

    return (
        <div>
            <button onClick={increment}>+</button>
            <br/>
            <p className="plus">{count}</p>
            <br/>

            <button onClick={decrement}>-</button>
            <br/>
            <p className="minus">{count}</p>
        </div>
    )
}
export default Counter
