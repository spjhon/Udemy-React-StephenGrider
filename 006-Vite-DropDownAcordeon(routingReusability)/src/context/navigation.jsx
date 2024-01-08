import { createContext, useState, useEffect } from "react";
// para el enrutamiento se utiliza el context.
const NavigationContext = createContext();

function NavigationProvider({children}) {
    //
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //to do este useeffect es para los botones de ida y regreso
    useEffect(() => {
        //este handler es igual al que se utilizo en el dropdown
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        //el popstate es para los botones de ida y vuelta del navegador
        window.addEventListener('popstate', handler);

        //no olvidar el cleanup function
        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    //este es para la navegacion en la barra de direcciones
    //esta es la navigation function
    const navigate = (to) => {
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