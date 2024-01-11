import { Fragment } from "react";

function Table ({dataProp, configProp}) {

    /* <th className="p-3">{configProp[0].render(fruit)}</th>
    <th className="p-3">{configProp[1].render(fruit)}</th>
    <th className="p-3">{configProp[2].render(fruit)}</th> */

    //Este codigo y el configProp que pasa es para darle una amplia reusabilidad a la tabla

    //este me lo pille, renderiza si hay o no un header existente, si si manda un fragment con lo que toca renderizar
    // sino retorna el label
    const renderedHeaders = configProp.map((column) => {
        if (column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>
        };

        return <th key={column.label}>{column.label}</th>
    });

    //LO QUE SE ESTA HACIENDO AL SEPARAR RENDEREDROWS DE RENDEREHEADERS:

    //es por si hay muchas columnas (objecst mandado desde el config) y estas columnas no tienen rows.
    //aqui se esta lleno celda por celda para crear un renderizado perzonalizado de acuerdo al config
    //EL ORDEN DE RENDERIZADO: es que despues de tener los headers se va por cada object (fruta) y se renderiza toda la fila ya que
    //cada fruit tiene sus propiedades y se renderiza toda una fila que representa una fruit antes de pasar a la siguiente fila
    
    //piensalo de esta forma, cada td es una celda entonces dole map hace tratamiento a cada minimo detalle que mapee
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