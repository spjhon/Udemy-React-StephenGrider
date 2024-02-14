import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

/*LO QUE ENTRA
- Importa los hooks useDispatch y useSelector de "react-redux".
- Importa las acciones changeName, changeCost y addCar desde el store.

ALGORITMO
- Utiliza el hook useDispatch para obtener la función dispatch.
- Utiliza el hook useSelector para obtener el estado del formulario (form) del store Redux, desestructurando las propiedades name y cost.
- Define tres funciones:
  - handleNameChange: Actualiza el nombre en el store al cambiar el valor en el input.
  - handleCostChange: Actualiza el costo en el store al cambiar el valor en el input, asegurándose de que sea un número entero.
  - handleSubmit: Despacha la acción addCar al hacer submit en el formulario, utilizando los valores actuales de name y cost.
- Retorna un componente de formulario con campos para el nombre y el costo de un automóvil.

LO QUE RETORNA
- Retorna un componente funcional CarForm que contiene un formulario para agregar un automóvil.
  - Incluye campos de entrada para el nombre y el costo, con lógica de manejo de eventos.
  - Utiliza las acciones changeName, changeCost y addCar para actualizar el estado del formulario y agregar un automóvil al store.
*/

function CarForm () {
    const dispatch = useDispatch();
    
    const {name, cost} = useSelector ((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        };
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    };

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addCar({
            name: name, 
            cost: cost,
        }));
    };

    return (

        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">

                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value = {name}
                            onChange = {handleNameChange}
                        ></input>
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="input is-expanded"
                            value = {cost || ''}
                            onChange = {handleCostChange}
                            type='number'
                        ></input>
                    </div>

                </div>

                <div className="field">
                    <button className="button is-link">
                        Submit
                    </button>
                </div>

            </form>
        </div>

    );
    
};

export default CarForm;