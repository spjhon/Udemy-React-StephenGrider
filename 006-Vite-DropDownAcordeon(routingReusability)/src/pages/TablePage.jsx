// import Table from "../components/Table";
import SortableTable from "../components/Table/SortableTable";

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
        //en esta funcion arrow la utilize de manera que muestr que cuando se utiliza el {}, se debe de utilizar el return
        render: (fruit) => {return fruit.name},
        sortValue: (fruit) => fruit.name
        },

        {
        label: 'Color',
        render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} ></div>
        },

        {
        label: 'Score',
        render: (fruit) => fruit.score,
        header: () => <th className="bg-red-500">Score</th>,
        sortValue: (fruit) => fruit.score
        }
    ]
    return (
        <div>
            <SortableTable dataProp = {data} configProp = {config}></SortableTable>
        </div>
    );
}

export default TablePage;