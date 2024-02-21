import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

//este useThunks es primero una forma de practicar los hooks, y segundo es para tener
//una forma de tener un fine grine state para el manejo de los spiners
//el thunk que le entra es la funcion que se va a ejecutar y a despachar
//
function useThunk (thunk) {
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    //el useCallback se utiliza para que el useEffect no se repita cada vez que cambie la info
    //ver videos de useCallback de mas atras
    //el arg es por si se pasa algo mas como por ejemplo al borrar usuario
    //Este useThunks tiene su porpio estado debido a que envia actions types automaticamente, mientras
    //que el slice solo puede ir de orden en orden que le va llegando, no hace nada asyncrono.

    /*El estado (isLoading, error) que estás manejando en tu hook useThunk se mantendrá independiente 
    para cada llamada a runThunk. Cada vez que creas una nueva instancia del hook mediante useThunk, 
    se crea un nuevo conjunto de estados (isLoading, error) para esa instancia específica.*/
    
    const runThunk = useCallback((arg) => {
        setIsloading(true);
        //resulta que el dipatch es una promise, entonces si se le agrega un .then() entonces la fucnion dentro
        //del .then() se va a ejecutar sin importar si el request es succeded o falla
        //entonces un truco de javascript y de las promises es que se le agrega un .unwrap() que se le agrega
        //una nueva promesa y entonces se le puede agregar el then, catch y el finally
        //ver el video de grider 396 para ver mas sobre como se forma este dispatch con promesas
        dispatch(thunk(arg))
            .unwrap()
            .catch(err => setError(err))
            .finally(() => setIsloading(false));
    }, [dispatch, thunk]);

    return [runThunk, isLoading, error];
};

export default useThunk;