import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

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

