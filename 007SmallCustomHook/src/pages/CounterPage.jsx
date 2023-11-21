import useCustomHook from '../CustomHook'

function CounterPage ({initialCount}) {
    const {count, handleClick} = useCustomHook(initialCount);

    return (
    <div>
        <h1>Count is {count}</h1>
        <button onClick={handleClick} >
            Increment
        </button>
    </div>)
};

export default CounterPage;