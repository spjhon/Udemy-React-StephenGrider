import { useReducer } from "react";

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';


/*LO QUE ENTRA
- En este ejemplo tenemos una constante function llamada reducer que es el primer argumento del useReducer y mas abajo un componente que utiliza el useState
y la constante reducer como primer argumento y la STORE como segundo argumento.
- El reducer es una funcion que le entra el state actual del las variables y un action que es lo que se 
dispatch desde donde se utiliza el reducer, este action posee TYPE y PAYLOAD, el state es casi siempre un object
con diferentes tipos de state ya sean arrays, integers u otros objects.

ALGORITMO DEL REDUCER
- De acuerdo al type se ejecuta una action sobre el state (recordar que este action viene un type y un payload)

LO QUE RETORNA
- La idea es que siempre que se invoque un reducer que es que llegue un type y un payload bien definido, pero en el caso que no
pues que devuelva el state actual y listo, no hay re-renderizados

*/

//SE CREA EL REDUCER
//Como funciona el reducer: el state es el state viejo, por eso para no modificar el state se utiliza el retorno de un nuevo object. El ...state y el action
//que es lo que viene desde el dispatch y actualiza en este caso lo que venga en payload, por eso en redux va un payload y un type
//ojo el ...state es por si existe otro state en el reducer que no se actualiza en el case entonces es mejor siempre meter el ...state
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

/*LO QUE ENTRA
- Entra el initialCount que es el prop que viene desde la invocacion del componente

ALGORITMO
- Se utiliza useReducer para crear la STORE en donde se van a almacenar el state que la constante function llamada reducer va 
a modificar
- Se destructura del useReducer el state y el dispatch, el state es para utilizar el state en alguna parte del componente,
el dispatch es para mandar ordenes al reducer y hacer modificaciones 

LO QUE RETORNA
- El componente retorna el jsx basico para el funcionamiento del counter

*/
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
        // este || se utiliza debido a que si se apreta la tecla delete va a enviar algo que no es un numero y se va a tostar el input
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