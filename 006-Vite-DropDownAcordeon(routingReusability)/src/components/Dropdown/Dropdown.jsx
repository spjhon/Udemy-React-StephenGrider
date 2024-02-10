import { useEffect, useState, useRef } from "react";
import Panel from "./Panel";
import {FcExpand } from "react-icons/fc";
import "./Dropdown.css"
import "./Panel.css"

function Dropdown ({optionsProp, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    /*When you pass a ref to a ref attribute in JSX, like <div ref={myRef}>, 
    React will put the corresponding DOM element into myRef.current. Once the element is removed from the DOM, 
    React will update myRef.current to be null.*/
    
    const divElement = useRef(); //VER VIDEO 209 DE GRIDER, de esta forma divElement siempre va a ser el elemento que devuelve el
    //componente al que se le agrego ref
    
//El useEffect es para que se cierre desde cualquier otro lado que se le click
//Este es un pattern para saber que se dio click en cualuqier otro elemento que no sea el elemento que se necesita
// Ojo, la forma en que funciona la face captura y bubble puede ser complcado, referirse al video de grider
//Ojo, para hacer debuggin utilizar la funcion performance.now() que mide los miliseconds desde que se refresco la pagina

//ALGORITMO
// - El use effect es para que se asigne un detector de click tan pronto se renderize el componente
// - Si se da un click, se lee el event y se pregunta si el div al que se le dio click es diferente al div acutal (divElement.current)
// - Si si es diferente se asigna el setIsOpen a false para que se cierre el dropdown debido a que se se le dio click por fuera
// - Luego se asigna un hadleClick que cuando se de click en el panel se abra el dorpdown
// - Luego un handleOptionClick que cierra el dropdown
// - Luegon un renderedOptions que es un map en donde se imprime cada uno de las opciones
// EN EL RETURN
// - Se devuelve un div con la referencia para el useRef
// - Dentro del div a un panel en donde se muestra Select... si no hay opcon seleccionada en el padre, sino se muestra
// - Si el state es abierto se muestran las opciones del renderedOptions sino no 
useEffect(() => {
    
        const handler = (event) => {
            //aqui se pregunta si se dio click dentro del dropdown
            //aqui es una buena practica que dice que si el elemento no esta visible o es null pues return early from the handler
            console.log(divElement)

            //este if es un extra en caso de que no exista el elemento en el DOM
            if (!divElement.current){
                return;
            }

            //aqui se esta preguntando si el click NO fue dentro del elemento
            if (!divElement.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        //Este true en el eventlistener es parte de javascrit y esta hecho para controlar las faces de capturing y bubble faces
        //entonces en este caso la cosa si se necesita en true por que react es mas rapido que las detecciones de las fases de javascrpt
        //entonces no detecta el eventlistener, entonces se cambia a true para poder que se detecte que se esta dentro del dropdown 
        //desde la fase de capturing.
        document.addEventListener('click', handler, true);

        return () => {
            //acuerdese que este es el cleanup para que deje de buscar clicks
            document.removeEventListener('click', handler)
        };

    }, []);



    const handleClick = (event) => {
        //Se aplica una forma funcional para controlar los clicks repetidos
        
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

    // la frase value?.label || 'Select...' es un truco de logica:
    /* 1. value?.label: This uses the optional chaining operator. 
    - It checks if the value object is defined and has a property named label. 
    - If value is null or undefined, the expression returns undefined without throwing an error. 
    - If value is defined and has a label property, it returns the value of value.label.
    
    2. || 'Select...': This is the logical OR operator. 
    If the left operand (value?.label) is falsy, it evaluates the right operand ('Select...'). 
    If the left operand is truthy, it stops evaluating and returns the left operand. 
    In this case, if value?.label is undefined or falsy, it will return the string 'Select...'.
    */
    return <div ref={divElement} className="Dropdown__content">
    
        <Panel className="Panel" onClick={handleClick}>
            {value?.label || 'Select...' /* en este or se hace para que en caso de null pues muestre la opion select..., el signo de interrogacion es una forma fancy de pregunta si el valor esta definido y si si pues leer lo que vaya depsues del punto */ }
            <FcExpand className="fcExpand" />
        </Panel>
        {isOpen && <Panel className="openPanel" >{renderedOptions}</Panel>} 
    </div>
}
export default Dropdown;
