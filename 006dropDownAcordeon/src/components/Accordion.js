import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion ({items}) {

    const [expandedIndex, setExpandedIndex] = useState(-1);



    const handleClick = (indexExtraidoDelMap) => {
        if (expandedIndex === indexExtraidoDelMap){
            setExpandedIndex(-1)
        } else {
            setExpandedIndex (indexExtraidoDelMap);
        }
    };

    const renderedItems = items.map((item, index) => {

        /*  if (index === expandedIndex){
            console.log('expanded');
        } else{
            console.log('collapsed');
        } */
        const isExpanded = index === expandedIndex;

        const icon = (
        <span className="text-2xl">
            {isExpanded ? <GoChevronDown/> : <GoChevronRight/>}
        </span>
        );

            //aqui toca mirar las reglas condicionales, condicional rendering
        const content = isExpanded && <div className="border-b p-5">{item.content}</div>

        console.log(isExpanded)
    

        return (
        <div key={item.id}>
            <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>{icon} {item.label}</div>
            {content}
        </div>);

    });

    return (
    <div className="border-x border-t rounded">
        {renderedItems}
    </div>);
    
}

export default Accordion;