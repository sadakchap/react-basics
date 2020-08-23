import React, { useState } from 'react'


const CounterExample = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    }

    const decrementCount = (e) => {
        setCount(count-1);
    }

    return (
        <div>
            Counter Example
            <br />
            <button id="plusBtn" onClick={incrementCount}>Plus</button>
            <button id="minusBtn" onClick={decrementCount}>Minus</button>
            <p id="text-count">{count}</p>
        </div>
    )
}

export default CounterExample
