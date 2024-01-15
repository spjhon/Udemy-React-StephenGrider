import { useReducer } from "react";

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    // EN LUGAR DEL IF SE VA A UTILIZAR EL SWITCH
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            }
        default:
            return state;
    }

/*    if (action.type === INCREMENT_COUNT){
        return {
            ...state,
            count: state.count + 1
        };
    };

    if (action.type === SET_VALUE_TO_ADD){
        return {
            ...state,
            valueToAdd: action.payload,
        };
    };

    return state; */
};

function CounterPage ({initialCount}) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [state, dispatch] = useReducer (reducer, {
        count: initialCount,
        valueToAdd: 0,
    });

    const increment = () => {
        // setCount (count + 1);
        dispatch({
            // this is an action object
            type: INCREMENT_COUNT,
        });
    };

    const decrement = () => {
        // setCount (count - 1);
        dispatch({
            // this is an action object
            type: DECREMENT_COUNT,
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
        dispatch({
            type: ADD_VALUE_TO_COUNT,

        });
    };

    return (
    <div>
        <h1>Count is {state.count}</h1>

        <button onClick={increment} >
            Increment
        </button>

        <button onClick={decrement} >
            Decrement
        </button>

        <form onSubmit={handleSubmit}>

            <label>Add a lot!</label>

            <input type='number' value={state.valueToAdd || ""} onChange={handleChange}></input>

            <button>
                Add it!
            </button>

        </form>

        

    </div>)
};

export default CounterPage;