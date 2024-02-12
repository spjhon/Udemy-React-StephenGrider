import useNavigation from "../../hooks/use-navigacion";
import "./Link.css"

// ALGORITMO
// - El componente Link es una envoltura para un elemento HTML anchor, utilizado como enrutador mediante el contexto de navegación.
// - Recibe las props 'to' para la dirección a la que se desea navegar, 'children' para el contenido del enlace, y 'className' para posibles clases adicionales.
// - Utiliza el contexto para obtener la función 'navigate' y el estado 'currentPath'.
// - La variable 'activeSelection' guarda un nombre de clase para resaltar el enlace correspondiente al 'currentPath'.
// - La función 'handleClick' se ejecuta al hacer clic en el enlace. Evita que la página se recargue y utiliza 'navigate' para cambiar la ruta.
// - El atributo 'href' del anchor es la dirección a la que se navegará y se obtiene de la prop 'to'.
// - Finalmente, se devuelve el elemento anchor con las clases combinadas, el 'href' y el 'onClick' que llama a 'handleClick'.

function Link({to, children, className}) {
    
    // La variable 'currentPath' se obtiene desde el contexto para resaltar el enlace seleccionado.
    const {navigate, currentPath} = useNavigation()

    // La variable 'activeSelection' guarda un nombre de clase para resaltar el enlace correspondiente al 'currentPath'.
    let activeSelection = "";

    if (currentPath === to) {
        activeSelection = "activeClassName"
    }

    // La función 'handleClick' se ejecuta al hacer clic en el enlace.
    // Evita que la página se recargue y utiliza 'navigate' para cambiar la ruta.
    const handleClick = (event) => {
        // Este if evita que se abra una nueva pestaña si se presiona 'Ctrl' (Windows/Linux) o 'Cmd' (Mac).
        if (event.metaKey || event.ctrlKey){
            return;
        }
        // 'event.preventDefault()' evita que se actualice la página al hacer clic en el enlace.
        event.preventDefault();
        navigate(to);
    };

    // Se devuelve el elemento anchor con las clases combinadas, el 'href' y el 'onClick'.
    return <a className={className + " " + activeSelection} href={to} onClick={handleClick} >{children}</a>
}

export default Link;
