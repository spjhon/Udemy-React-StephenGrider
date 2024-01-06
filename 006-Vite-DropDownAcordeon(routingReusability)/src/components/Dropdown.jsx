import { useEffect, useState, useRef } from "react";
import Panel from "./Panel";
import {FcExpand } from "react-icons/fc";
import "./Dropdown.css"
import "./Panel.css"

function Dropdown ({optionsProp, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divElement = useRef();


    useEffect(() => {
        const handler = (event) => {

            if (!divElement.current){
                return;
            }

            
            if (!divElement.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler)
        };

    }, []);

    const handleClick = () => {
        //Se aplica una forma funcional para controlar los clicks repetidos
        setIsOpen((currentIsOpen) => !currentIsOpen); //en lugar de utilizar lo mas logico que seria !isOpen para que haga lo contrario
    };

    const handleOptionClick = (optionSelected) => {
        
        //Close the dropdown
        setIsOpen(false);
        console.log(optionSelected);
        //update the piece of state en el componente padre
        onChange(optionSelected);
    }

    const renderedOptions = optionsProp.map ((option) => {
        return <div className="Dropdwon__body" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });

    

    //la idea del && es que si sale falso el isopen pues toda la expersion va a ser falsa y nada se va a mostrar
    //algo interesante a tener en cuenta cuando al onClick se le pasa el handleclick directamente sin funciones arrow, devuleve el event object

    return <div ref={divElement} className="Dropdown__content">
        <Panel className="Panel" onClick={handleClick}>
            {value?.label || 'Select...'}
            <FcExpand className="fcExpand" />
        </Panel>
        {isOpen && <Panel className="openPanel" >{renderedOptions}</Panel>} 
    </div>
}
export default Dropdown;
