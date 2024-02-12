import { Fragment } from "react";

/*
LO QUE ENTRA
- dataProp: Un array de objetos que contiene los datos a ser mostrados en la tabla.
- configProp: Un array de objetos que contiene la configuración de cada columna de la tabla.
- keyFn: Una función que genera una clave única para cada elemento en el array de datos.
*/

/*
ALGORITMO
- Se renderiza la tabla con sus encabezados y filas de acuerdo a los datos y configuración proporcionados.
- Los encabezados y celdas son personalizables mediante la configuración dada en configProp.
*/

/*
LO QUE RETORNA
- Retorna un componente de tabla que muestra los datos proporcionados de acuerdo a la configuración dada.
*/

function Table ({dataProp, configProp, keyFn}) {

    /* <th className="p-3">{configProp[0].render(fruit)}</th>
    <th className="p-3">{configProp[1].render(fruit)}</th>
    <th className="p-3">{configProp[2].render(fruit)}</th> */

    /*
    En lugar de renderizar manualmente cada th, se utiliza el método map para recorrer la configuración de columnas (configProp).
    Si una columna tiene una función header definida, se utiliza; de lo contrario, se muestra el label de la columna.
    El resultado es un array de elementos th personalizados.
    */

    //Este codigo y el configProp que pasa es para darle una amplia reusabilidad a la tabla

    //este me lo pille, renderiza si hay o no un header existente, si si manda un fragment con lo que toca renderizar
    // sino retorna la funcion header que esta por alla atras
    const renderedHeaders = configProp.map((column) => {
        if (column.header){
            //PARA TENER EN CUENTA, como se esta trabajando con tablas, no se puede retornar un div
            //entonces dse utiliza el fragment que pertenece a react
            //esta pregunta sobre header es para renderizar cualquier header que se agrege
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }

        return <th key={column.label}>{column.label}</th>
    });

    /*
    Se utiliza map para recorrer los datos (dataProp).
    Dentro de cada iteración, se utiliza otro map para recorrer la configuración de columnas (configProp) y renderizar cada celda.
    El resultado es un array de filas (tr) con celdas (td) personalizadas según la configuración.
    */

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
            <tr className="border-b" key = {keyFn(fruit)}>
            {renderedCells}
            </tr>
        )
    });

    /*
    Finalmente, se retorna el componente de tabla con los encabezados y filas renderizados según la configuración y datos proporcionados.
    */
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