import { useState } from "react";
import Table from "./Table";
import { GoChevronUp, GoChevronDown, GoRocket } from "react-icons/go";


function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const {configProp, dataProp} = props;

    const handleClick = (label) => {

        if (sortBy && label !== sortBy){
            setSortOrder('ascendente');
            setSortBy(label);
            return;
        }

        if (sortOrder === null){
            setSortOrder('ascendente');
            setSortBy(label);
        }else if (sortOrder === 'ascendente'){
            setSortOrder('descendiente');
            setSortBy(label);
        }else if (sortOrder === 'descendiente'){
            setSortOrder(null);
            setSortBy(null);
        };
            
    }

    const updatedConfig = configProp.map ((column) =>{
        if (!column.sortValue){
            return column;
        }
        return {
            ...column,
            header: () => 
            <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)} >
                <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }
    });

    let sortedData = dataProp;

    if (sortOrder && sortBy) {
        const {sortValue} = configProp.find(column => column.label === sortBy);

        //Esta funcion es un sort con un algoritmo muy util, un COMPARADOR
        //sort convierte a string y luego compara lo que da lugar a bugs asi ue se utiliza el comparador
        //para hacer las verificaciones, video 259 de grider
        //el comparador lo que hace es restar los elementos y asi si es negativo o no saber cual es mayor que cual
        sortedData = [...dataProp].sort((a,b) => {
            //aqui lo que se esta haciendo es utilizar un pattern para extraer los valores por los cuales
            //se va a re-ordenar la lista de objects que se le meta, la funcion sortValue
            //busca y extrae los valores de object y los somete al sort, video 262
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            //el revez order funciona de forma simple, debido a que el truco del sort es si el resultado 
            //de la resta es -1 o no, entonces para darle un orden inverso se le mete el -1
            const reverseOrder = sortOrder === 'ascendente' ? 1 : -1;

            //este if es para saber si el valor a ordenar que entra es un string o un numero
            if (typeof valueA === 'string'){
            //el localeCompare es para comparar strings transformandolos en numeros
                return valueA.localeCompare(valueB) * reverseOrder;
            }else{
                //este se aplica si el valor es numero
                return (valueA-valueB) * reverseOrder;
            }
        });
    }

    return (
        <div> 
            {sortOrder} - {sortBy}
            <Table {...props} dataProp = {sortedData}  configProp={updatedConfig} ></Table> 
        </div>)
    
};

function getIcons (label, sortBy, sortOrder){
    if (label !== sortBy){
        return (
            <div>
                <GoChevronUp></GoChevronUp>
                <GoChevronDown></GoChevronDown>
            </div>
        );
    }

    if (sortOrder === null){
        return (
            <div>
                <GoChevronUp></GoChevronUp>
                <GoChevronDown></GoChevronDown>
            </div>
        );
    }else if (sortOrder === 'ascendente'){
        return (
            <div>
                <GoChevronUp></GoChevronUp>
            </div>
        );
    }else if (sortOrder === 'descendiente'){
        return (
            <div>
                <GoChevronDown></GoChevronDown>
            </div>
        );
    }
}

export default SortableTable;