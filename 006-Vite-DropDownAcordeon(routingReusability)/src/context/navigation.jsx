import { createContext, useState, useEffect } from "react";
// para el enrutamiento se utiliza el context.
const NavigationContext = createContext();

/*ALGORITMO
- Al ejecutarse la app se active este provider y este store (el state currentPath and setCurrentPath)
- A este provider le entran los children, estos children son las page completas que estan en app
- Se crea el state dentro del provider con un default que es la ubicacion del navegador, ya sea desde la app principal odesde alguna pagina extra como /modal
- Se crea un useEffect que por su ubicacion siempre va a ejecutarse al ejecutarse la app que lo que hace
es utilizar un eventListener para escuchar un popstate que es cuando hay cambios en la barra de direcciones
    - si hay cambios entonces 
- Luego se crea una funcion llamada navigate que le entra un (to) y lo que hace con este es darle un set un nuevo state a la url asignada
y mandar al historial de la barra de direcciones del navegador la direccion actualizada
- El componente devuelve el provider con el state de path actual y la funcion para modificarlo, ademas de los children que ingresan al ser invocado el componente
*/

function NavigationProvider({children}) {
    //El state inicial es el princial que es "/" y es de tipo string
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    console.log(currentPath)
    //to do este useeffect es para los botones de ida y regreso
    useEffect(() => {
        //este handler es igual al que se utilizo en el dropdown
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        //el popstate es para los botones de ida y vuelta del navegador, el popstate se activa cuando
        //hay un cambio en el navegador
        window.addEventListener('popstate', handler);

        //no olvidar el cleanup function
        return () => {
            //pushState and popstate estan relacionados, los dos escriben a window.history
            window.removeEventListener('popstate', handler);
        };
    }, []);

    //este es para la navegacion en la barra de direcciones
    //esta es la navigation function que actualiza la barra de direcciones y el setCurrentPaht que
    //hace un trigguer de un nuevo render y todo lo que conyeva
    const navigate = (to) => {
        //pushState esta embded en el browser, lo que hace es actualiza la barra de navegacion
        //y automaticamente pone a funcionar los botones de atras y adelante
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return <NavigationContext.Provider value = {{currentPath, navigate}} >
        
        {currentPath}
        {children}
    </NavigationContext.Provider>
}

export {NavigationProvider}
export default NavigationContext;