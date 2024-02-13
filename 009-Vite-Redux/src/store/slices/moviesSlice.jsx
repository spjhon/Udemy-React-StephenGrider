import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

/*LO QUE ENTRA
- Importa la función createSlice de "@reduxjs/toolkit".
- Importa la acción reset desde el módulo "../actions".

ALGORITMO
- Utiliza createSlice para crear un slice llamado "movie" con un initialState vacío (un array vacío en este caso) y tres reducers: addMovie, removeMovie, y un extra reducer para el caso de la acción reset.
  - El reducer addMovie agrega una película al estado (state) utilizando el payload de la acción.
  - El reducer removeMovie elimina una película del estado según el payload de la acción.
  - El extra reducer está diseñado para escuchar la acción reset (fuera de las acciones propias del slice) y resetear el estado a un array vacío.

LO QUE RETORNA
- Exporta dos acciones (action creators) llamadas addMovie y removeMovie, que pueden ser utilizadas para despachar las acciones respectivas.
- Exporta el reducer moviesReducer que maneja el estado del slice.
*/

const moviesSlice = createSlice ({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload);
        },
        removeMovie(state, action){
            const index = state.indexOf(action.payload);
            // este codigo funciona por que se esta utilizando la libreria immer
            state.splice(index, 1);
        },
        /* reset(state, action){
            return [];
            
        }*/ 
    },
    extraReducers(builder){
        builder.addCase(reset, (state, action) =>{
            return [];
        });
    }
});

export const {addMovie, removeMovie} = moviesSlice.actions;
// export default moviesSlice.reducer;
export const moviesReducer = moviesSlice.reducer;
