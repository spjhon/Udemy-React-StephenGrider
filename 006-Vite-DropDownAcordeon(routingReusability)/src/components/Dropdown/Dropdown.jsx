import { useEffect, useState, useRef } from "react";
import Panel from "./Panel";
import {FcExpand } from "react-icons/fc";
import "./Dropdown.css"
import "./Panel.css"

function Dropdown ({optionsProp, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divElement = useRef(); //aqui se obtiene el elemento que es el elegido

//le tengo apuesta, el useEffect es para que se cierre desde cualquier otro lado que se le click
//Este es un patter para saber que se dio click en cualuqier otro elemento que no sea el elemento que se necesita
// Ojo, la forma en que funciona la face captura y bubble puede ser complcado, referirse al video de grider
//Ojo, para hacer debuggin utilizar la funcion performance.now() que mide los miliseconds desde que se refresco la pagina
//El use effect es para que se asigne un detector de click tan pronto se renderize el componente
useEffect(() => {
        const handler = (event) => {
            //aqui se pregunta si se dio click dentro del dropdown
            //aqui es una buena practica que dice que si el elemento no esta visible o es null pues return early rom the handler
            if (!divElement.current){
                return;
            }

            if (!divElement.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        //Este ture en el eventlistener es parte de javascrit y esta hecho para controlar las faces de capturing y bubble faces
        //entonces en este caso la cosa si se necesita en true por que ver video de gridder
        document.addEventListener('click', handler, true);

        return () => {
            //acuerdese que este es el cleanup para que deje de buscar clicks
            document.removeEventListener('click', handler)
        };

    }, []);

    const handleClick = (event) => {
        //Se aplica una forma funcional para controlar los clicks repetidos
        console.log(event)
        setIsOpen((currentIsOpen) => !currentIsOpen); //en lugar de utilizar lo mas logico que seria !isOpen para que haga lo contrario
    };

    const handleOptionClick = (optionSelected) => {
        
        //Close the dropdown
        setIsOpen(false);
        
        //update the piece of state en el componente padre
        onChange(optionSelected);
    }

    const renderedOptions = optionsProp.map ((option) => {
        return <div className="Dropdwon__body" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });

    

    //la idea del && es que si sale falso el isopen pues toda la expersion va a ser falsa y nada se va a mostrar
    //algo interesante a tener en cuenta cuando al onClick se le pasa el handleclick directamente sin funciones arrow, devuleve el event object
    //el panel es para una abstraccion de un panel
    return <div ref={divElement} className="Dropdown__content">
    
        <Panel className="Panel" onClick={handleClick}>
            {value?.label || 'Select...' /* en este or se hace para que en caso de null pues muestre la opion select..., el signo de interrogacion es una forma fancy de pregunta si el valor esta definido y si si pues leer lo que vaya depsues del punto */ }
            <FcExpand className="fcExpand" />
        </Panel>
        {isOpen && <Panel className="openPanel" >{renderedOptions}</Panel>} 
    </div>
}
export default Dropdown;
