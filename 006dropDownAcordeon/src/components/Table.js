import { Fragment } from "react";

function Table ({dataProp, configProp}) {

    /* <th className="p-3">{configProp[0].render(fruit)}</th>
    <th className="p-3">{configProp[1].render(fruit)}</th>
    <th className="p-3">{configProp[2].render(fruit)}</th> */

    const renderedHeaders = configProp.map((column) => {
        if (column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>
        };

        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = dataProp.map((fruit) => {
        const renderedCells = configProp.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(fruit)}</td>
        });
        return (
            <tr className="border-b" key = {fruit.name}>
            {renderedCells}
            </tr>
        )
    });

    return (<table className="table-auto border-spacing-3">
        <thead>
        <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>{renderedRows}</tbody>
    </table>);
}

export default Table;