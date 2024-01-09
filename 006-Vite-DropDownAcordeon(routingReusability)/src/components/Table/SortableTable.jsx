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
        sortedData = [...dataProp].sort((a,b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'ascendente' ? 1 : -1;

            if (typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder;
            }else{
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