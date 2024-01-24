import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: "",
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
            const updated = state.carsData.filter((car) => {
                return car.id !== action.payload
            });
            console.log(JSON.stringify(state, null, 2)) // asi se puede ver el state solo para debuggin porpuses
            //la forma de removerlo es utilizar el filter para dejar volver a hacer la lista de nuevo y
            // publicarla completa en el state sin el elemento que falta
            //algo para tener en cuenta es que react utiliza reonciliation asi que si el array tiene 20000
            //elementos o mas pues react no va a re-renderizar todo eso en el DOM
            state.carsData = updated;
        },
    },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;