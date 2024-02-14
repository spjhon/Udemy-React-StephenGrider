import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

/*LO QUE ENTRA
- Importa la función createSlice desde "@reduxjs/toolkit".
- Importa la acción addCar desde el slice de coches (carsSlice).

ALGORITMO
- Utiliza createSlice para crear un slice llamado "form" con un estado inicial que contiene name y cost.
- Define dos reducers en el slice: changeName y changeCost, que actualizan los valores de name y cost en el estado según el payload de la acción.
- Define un extraReducer que escucha la acción addCar proveniente del slice de coches (carsSlice).
  - Cuando se dispara addCar, este extraReducer resetea los valores de name y cost en el estado del slice "form".
- Exporta las acciones (action creators) changeName y changeCost, así como el reducer formReducer generado por createSlice.

LO QUE RETORNA
- Exporta dos acciones (action creators) llamadas changeName y changeCost, que se pueden utilizar para despachar las acciones respectivas.
- Exporta el reducer formReducer que maneja el estado del slice "form".
*/

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0,
    },
    reducers:{
        changeName(state, action){
            state.name = action.payload;
        },
        changeCost(state, action){
            state.cost = action.payload;
        },
    },

    //este extra reducer es curioso, mas curioso que el del ejercicio anterior ya que aqui utiliza es 
    //el addCar function del otro slice para crear el reseteo, escucha otro ACTION TYPE.
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        });
    },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer; //combine reducer

