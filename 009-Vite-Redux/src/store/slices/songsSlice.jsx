import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

//cada slice se puede considerar como un state con reducers que se relacionan entre si
const songsSlice = createSlice ({
    //por ejemplo en esta referencia cuando se ejecuta el reducer desde otro lado que utilizan el "song/addSong"
    // es la ejecucion de este slice, 
    //osea cuando se depacha un dispatch con esta estructura 'song' + '/' + 'addSong' se sabe qie funcion
    //ejecutar

    //otra cosa, se utiliza el push y otras cosas en este lugar gracias a que immer viene incluiido en redux
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            //console.log(songsSlice.actions), estos son los actions disponibles para dispatch en el componente
            //algo mas para tener en cuenta, este state no es el state completo ese esta en el store
            //console.log(state)
            console.log(JSON.parse(JSON.stringify(state)));
            //este cosolelog con json me lo dio chatgpt para poder ver el estado del state
            //el hecho que este console.log del state no funcione como se espera es por la biblioteca de immer
            state.push(action.payload);
        },
        removeSong(state, action) {
            //
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        /*reset (state, action) {
            return [];     este codigo hubiera funcionado pero no debido a que 
        }*/
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            //debido a immer, no se puede hacer algo como state = [] ya que esto es asignar de nuevo mas no cambiar el state asi que se utiliza el return
            return [];
        });
    },
});

//aqui se esta exportando los actions creators
export const {addSong, removeSong} = songsSlice.actions; //songsSlice.actions.addSong() este es un action
export const songsReducer = songsSlice.reducer;