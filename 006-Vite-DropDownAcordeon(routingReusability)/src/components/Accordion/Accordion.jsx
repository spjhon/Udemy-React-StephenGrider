import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import "./Accordion.css"

function Accordion ({items}) {

    //el State comienza en -1 para que todos esten cerrados, ya que si se emieza ya sea con 0 o 1
    // va a abrir
    const [expandedIndex, setExpandedIndex] = useState(-1);



    const handleClick = (indexExtraidoDelMap) => {

        //ALGO a tener en cuenta, se recomienda aplicar una forma funcional para que siempre se obtenga el ultimo value.
        /*if (expandedIndex === indexExtraidoDelMap){
            setExpandedIndex(-1)
        } else {
            setExpandedIndex (indexExtraidoDelMap);
        }*/

        setExpandedIndex((current) => {
            if (expandedIndex === indexExtraidoDelMap){
                return -1;
            } else {
                return indexExtraidoDelMap;
            }
        })
    };

    //La comparacion que se hace en este ejercicio es:
    // - Se ingresa todo el array de items (el object del componente padre) y se va por cada item
    // - Cada item tiene dos pedasos, y se utiliza info que esta fuera del map que es expandedIndex
    // - En caso de que iexpandedIndex traiga un valor que sea igual al index que se esta mapeando, se agrega un div con la info
    // que trae el item que son dos pesasos y queda un solo pedaso
    // - Al final en una sola variable llamada renderedItems esta una serie de divs que siempre van a tener el titulo
    // - y si el expandedIndex es igual se agrega al div, un div interno con el segundo pedazo del item.
    const renderedItems = items.map((item, index) => {

        /*  if (index === expandedIndex){
            console.log('expanded');
        } else{
            console.log('collapsed');
        } */

        // isExpanded almacena booleano true o falce sin necesidad del if
        const isExpanded = index === expandedIndex;

        const icon = (
        <span className="Accordion_arrow">
            {isExpanded ? <GoChevronDown/> : <GoChevronRight/>}
        </span>
        );

            //aqui toca mirar las reglas condicionales, condicional rendering, los && y el condiconal or)
        const content = isExpanded && <div className="Accordion__content">{item.content}</div>
    
//
        return (
        <div key={item.id}>
            <div className="Accordion__body" onClick={() => handleClick(index)}>{icon} {item.label}</div>
            {content}
        </div>);

    });

    return (
    <div className="Accordion__external">
        {renderedItems}
    </div>);
    
}

export default Accordion;