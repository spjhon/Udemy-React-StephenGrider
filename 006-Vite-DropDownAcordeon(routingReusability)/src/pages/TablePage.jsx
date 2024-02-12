// import Table from "../components/Table";
import SortableTable from "../components/Table/SortableTable";

/* LO QUE ENTRA
No entran props

ALGORITMO
- Se crea el array de objects data que contiene los datos a ser mostrados en la tabla pero que primero van a ser filtrados en el
componente SortableTable y luego si enviados al componente Table
- Se crea un arrays de objects llamado config que contiene la configuracion a aplicar en el SortableTable para generar la tabla a mostrar final
- Se crea una key function con el fin de generar una key para el map del componete siguiente

LO QUE RETORNA
- Retorna un div que llama el comonente SortableTable y pasa los props de los datos de la tabla, los datos sobre como configurar la tabla y la llave para el mapeado de los datos
*/

function TablePage() {

    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4},

    ];

    //este archivo config lo que hace es que cada object es una columna y de ahi se le asignan configuraciones
    //entonces cada columna tiene su propia forma de manejar lo que vaya llegando e ir renderizando celda a celda
    const config = [
        {
        label: 'Name Fruit',
        //en esta funcion arrow la utilize de manera que muestra que cuando se utiliza el {}, se debe de utilizar el return
        render: (fruit) => {return fruit.name},
        sortValue: (fruit) => fruit.name
        },

        {
        label: 'Color',
        render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} ></div>,
        
        },

        {
        label: 'Score',
        render: (fruit) => fruit.score,
        //el header es un opconal por si se desea agregar algo mas al titulo de la columna de la tabla
        /*header: () => <th className="bg-red-500">Score</th>,*/
        sortValue: (fruit) => fruit.score
        }
    ];

    //esta funcion es para extraer facilmente la llave de los datos entrantes y pasarlos a los maps en donde
    //se utilicen
    //ojo, este key va solo al retorno final de cada fruit en este caso, no a las celdas individuales
    //la ventaja de esta funcion es que se le puede cambiar el tipo de elemento que desea ordenar con tan 
    //solo cambiar el object
    const keyFn = (fruit) => {
        return fruit.name;
    };

    
 
    return (
        <div>
            <SortableTable dataProp={data} configProp={config} keyFn={keyFn}></SortableTable>
        </div>
    );
}

export default TablePage;