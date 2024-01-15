import { useState } from "react";

function CounterPageOld ({initialCount}) {
    const [count, setCount] = useState(initialCount);

    //redordar que este state es un patter de control de input, a controlled input
    const [valueToAdd, setValueToAdd] = useState(0)

    const increment = () => {
        setCount (count + 1);
    };

    const decrement = () => {
        setCount (count - 1);
    };

    const handleChange = (event) => {
        //el parce integer es debido a que el evento llega en forma de string
        const value = parseInt(event.target.value) || 0;
        setValueToAdd(value);
        console.log(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCount(count + valueToAdd);
        setValueToAdd(0);
    };

    return (
    <div>
        <h1>Count is {count}</h1>

        <button onClick={increment} >
            Increment
        </button>

        <button onClick={decrement} >
            Decrement
        </button>

        <form onSubmit={handleSubmit}>

            <label>Add a lot!</label>

            <input type='number' value={valueToAdd || ""} onChange={handleChange}></input>

            <button>
                Add it!
            </button>
            
        </form>

        

    </div>)
};

export default CounterPageOld;