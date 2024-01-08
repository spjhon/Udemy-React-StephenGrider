
import useNavigation from "../../hooks/use-navigacion";
import "./Link.css"

//la funcion le entra el to que para donde desea navegar y el children que es lo que esta dentro del anchor
function Link({to, children, className}) {
    
    //la variable currentPath entra desde context con el fin de darle el highlight al link seleccionado
    const {navigate, currentPath} = useNavigation()

    //const classes = classNames ('text-blue-500', className, currentPath === to && activeClassName);

    let activeSelection = "";

    if (currentPath === to) {
        activeSelection = "activeClassName"
    }

    const handleClick = (event) => {
        //este if es para que cuando la gente aprete ctrlkey o la otra tecla en mac se habra una nueva pestana
        if (event.metaKey || event.ctrlKey){
            return;
        }
        //este event.prevent es para evitar que se actualice la pagina
        event.preventDefault();
        navigate(to);
    };
    return <a className={className + " " + activeSelection} href={to} onClick={handleClick} >{children}</a>
}

export default Link;