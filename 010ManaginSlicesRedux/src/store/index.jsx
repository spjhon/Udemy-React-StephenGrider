import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm  } from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
/* LO QUE ENTRA
Se importa configureStore de @reduxjs/toolkit para crear el store de Redux.
Se importan los reducers y actions relevantes de los slices carsSlice y formSlice.

ALGORITMO
Se crea el store utilizando configureStore, configurando los reducers carsReducer y formReducer. 
El store centraliza el estado de la aplicación, pero la lógica de cómo se modifica este estado se encuentra en los slices correspondientes.

LO QUE RETORNA
El store no retorna, pero se exporta para ser utilizado como provider en la aplicación.
Se exportan también las funciones de modificación del estado (actions) para que puedan ser utilizadas en componentes que utilicen useDispatch.

EXPORTACIONES
- store: El store central de Redux que contiene el estado global de la aplicación.
- changeName: Action creator para cambiar el nombre en el formulario.
- changeCost: Action creator para cambiar el costo en el formulario.
- addCar: Action creator para agregar un automóvil a la lista.
- removeCar: Action creator para eliminar un automóvil de la lista.
- changeSearchTerm: Action creator para cambiar el término de búsqueda en la lista de automóviles.

Notas adicionales:
- La lógica específica de cómo se manipula el estado se encuentra en los slices carsSlice y formSlice, y los reducers y actions importados aquí son parte de esa lógica.
- Los comentarios proporcionan una visión general del propósito de cada importación y exportación en este archivo.
*/
const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer,
    },
});


export {
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
}