import { createSlice, nanoid } from "@reduxjs/toolkit";

/*LO QUE ENTRA
- Importa las funciones createSlice y nanoid de "@reduxjs/toolkit".

ALGORITMO
- Utiliza createSlice para crear un slice llamado "cars" con un estado inicial que contiene searchTerm (cadena de búsqueda) y carsData (array de datos de automóviles vacío).
- Define tres reducers en el slice: changeSearchTerm, addCar, y removeCar.
  - El reducer changeSearchTerm actualiza el valor de searchTerm en el estado según el payload de la acción.
  - El reducer addCar agrega un nuevo automóvil al array carsData en el estado, utilizando la información proporcionada en el payload de la acción y generando un identificador único con nanoid().
  - El reducer removeCar elimina un automóvil del array carsData en el estado, utilizando el identificador proporcionado en el payload de la acción y actualizando el array con el método filter.
- Exporta las acciones (action creators) changeSearchTerm, addCar, y removeCar, así como el reducer carsReducer generado por createSlice.

LO QUE RETORNA
- Exporta tres acciones (action creators) llamadas changeSearchTerm, addCar, y removeCar, que se pueden utilizar para despachar las acciones respectivas.
- Exporta el reducer carsReducer que maneja el estado del slice "cars".
*/


const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: "", //Este es un controlled input
        carsData: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            // Assumption:
            // action.payload === { name: 'ab', cost: 140}
            state.carsData.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        removeCar(state, action){
            //Assumption:
            // action.payload === the id of the car we want to remove
            /*------------------------------------------------------------*/
            //la forma de removerlo es utilizar el filter para dejar volver a hacer la lista de nuevo y
            // publicarla completa en el state sin el elemento que falta
            //algo para tener en cuenta es que react utiliza reonciliation asi que si el array tiene 20000
            //elementos o mas pues react no va a re-renderizar todo eso en el DOM
            const updated = state.carsData.filter((car) => {
                return car.id !== action.payload
            });
            console.log(JSON.stringify(state, null, 2)) // asi se puede ver el state solo para debuggin porpuses
            
            state.carsData = updated;
        },
    },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;