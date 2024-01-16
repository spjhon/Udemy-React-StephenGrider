import { useReducer } from "react";

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';


//SE CREA EL REDUCER
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
                //la app puede funcionar sin este ...state pero es mejor por si vienen otras propiedades
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

    //SEGUN ESTO, el state el el array que llega de nuevos states a renderizar de acuerdo a la cantidad de states que se creen en el
    //reducer (en este caso son 2 states)
    //el punto importante es el dispatch, como se mandan los nuevos states a la store para que se distribuyan
    
    //Como funciona el dispatch:
    // - Se llama al dipatch con useReducer lo primero es dar una referencia a la funcion de arriba ("reducer")

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
            // esta es la accion que se utiliza en el reducer para actualizar el state
            type: SET_VALUE_TO_ADD,
            //el payload es si se necesita mandar un dato al state
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