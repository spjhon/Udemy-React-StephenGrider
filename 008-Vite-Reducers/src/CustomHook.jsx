import {useState, useEffect} from 'react';

function useCustomHook (prop) {
    const [count, setCount] = useState(prop);

    useEffect (() => {
        console.log(count);
    }, [count]);

    const handleClick = () => {
        setCount (count + 1);
    };

    //recuerda que cuando la llave y el contendio son los mismos
    //se deja solo la llave, pero se entiende que es un object
    return {
        count, 
        handleClick
    };
};

export default useCustomHook;