import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

/*LO QUE ENTRA
- Importa los hooks useDispatch y useSelector de "react-redux".
- Importa la acción changeSearchTerm desde el store.

ALGORITMO
- Utiliza el hook useDispatch para obtener la función dispatch.
- Utiliza el hook useSelector para obtener el término de búsqueda (searchTerm) del store Redux.
- Define una función handleSearchTermChange que actualiza el término de búsqueda en el store al cambiar el valor en el input.
- Retorna un componente CarSearch que contiene un encabezado de lista con un título y un campo de búsqueda.

LO QUE RETORNA
- Retorna un componente funcional CarSearch que proporciona la capacidad de cambiar el término de búsqueda en el store.
  - Utiliza el estado del término de búsqueda (searchTerm) del store Redux.
  - Muestra un título y un campo de entrada para realizar búsquedas.
  - Actualiza el término de búsqueda en el store al cambiar el valor en el campo de entrada.
*/

function CarSearch () {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    });

    const handleSearchTermChange = (event) => {
        dispatch (changeSearchTerm(event.target.value));
    };

    return (
    <div className="list-header">
        <h3 className="title is-3">My Cars</h3>

        <div className="search field is-horizontal">
            <label className="label">Search</label>
            <input
                className="input"
                value={searchTerm}
                onChange={handleSearchTermChange}
            ></input>
        </div>

    </div>
    )
    
};

export default CarSearch;