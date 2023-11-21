import { useEffect, useState, useRef } from "react";
import Panel from "./Panel";

import {FcExpand } from "react-icons/fc";
function Dropdown ({optionsProp, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divElement = useRef();


    useEffect(() => {
        const handler = (event) => {

            if (!divElement.current){
                return;
            }

            console.log(event.target)
            console.log(divElement.current)
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
        setIsOpen((currentIsOpen) => !currentIsOpen); //en lugar de utilizar lo mas logico que seria !isOpen para que haga lo contrario
    };

    const handleOptionClick = (optionSelected) => {
        console.log('I should close this');
        setIsOpen(false);
        console.log(optionSelected);
        onChange(optionSelected);
    }

    const renderedOptions = optionsProp.map ((option) => {
        return <div className="hover:gb-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });

    

    //la idea del && es que si sale falso el isopen pues toda la expersion va a ser falsa y nada se va a mostrar
    return <div ref={divElement} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
            {value?.label || 'Select...'}
            <FcExpand className="text-lg" />
        </Panel>
        {isOpen && <Panel className="absolute top-full" >{renderedOptions}</Panel>} 
    </div>
}
export default Dropdown;
