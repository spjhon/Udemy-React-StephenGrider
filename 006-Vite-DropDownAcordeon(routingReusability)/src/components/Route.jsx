import useNavigation from "../hooks/use-navigacion";

//Esta funcion lo que hace es que al momento de renderizar la pages en la app, pues se mandan todas,
//entonces para mostrar solo la que esta en la barra de direcciones, se llama el componente y se hace la pregutna
//cuando el path sea igual al que esta en la barra de direcciones entonces devolver el children de lo que
//esta envuelto en esa ruta

/*ALGORITMO
- Este componente es invocado desde la app principal y envuelve los children que son las paginas completas
- Le entra el path que es que se selecciona en el link y los children
- Se invoca la funcion currentPath por medio del hook useNavigation
- El if es para saber en la app principal que route se va a renderizar de acuerdo a los props enviados y 
al que sea igual al state en el contex va a ser renderizado osea que el if es para la renderizacion inical en el
navegador mas no para cuando se este navegando una vez cargada la app
*/
function Route({path, children}) {
    const {currentPath} = useNavigation();

    if (path === currentPath) {
        return children;
    }
}

export default Route;