import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

//cada slice se puede considerar como un state con reducers que se relacionan entre si
const songsSlice = createSlice ({
    //por ejemplo en esta referencia cuando se ejecuta el reducer desde otro lado que utilizan el "song/addSong"
    // es la ejecucion de este slice

    //otra cosa, se utiliza el push y otras cosas en este lugar gracias a que immer viene incluiido en redux
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            
            state.push(action.payload);
        },
        removeSong(state, action) {
            //
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    },
});

export const {addSong, removeSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer;