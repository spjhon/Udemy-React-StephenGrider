import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

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
