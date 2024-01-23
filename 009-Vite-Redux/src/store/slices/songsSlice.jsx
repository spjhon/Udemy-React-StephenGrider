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
            //console.log(JSON.parse(JSON.stringify(state)));
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
    //este extra reducer es para que el reset se aplique a todos los reducers de la store principal
    //buscar por adicional action types ademas de los de arriba
    //la idea de este extra reducer es para escuchar dispatch que no esta asociado al reducer como tal
    extraReducers(builder) {
        //entonces el addCase es propio de javascript y se le agrega el reset es el action type de "movie/reset" y el segundo argumento es
        //una funcion arrow que es la misma funcion de arriba en donde le entra el action y el state y luego se retorna el empty
        //el builder seria el state
        //de chatGPT: This function is used to define additional reducer logic that responds to other action types outside of the slice's own actions.
        //el addCase no pertenece a javascript, es de redux solamente
        builder.addCase(reset, (state, action) => {
            //debido a immer, no se puede hacer algo como state = [] ya que esto es asignar de nuevo mas no cambiar el state asi que se utiliza el return
            //state.playlist = [] va a funcionar normal pero state = [] no.
            //state.push("este es un extra reducer")
            return [];
        });
    },
});

//aqui se esta exportando los actions creators
export const {addSong, removeSong} = songsSlice.actions; //songsSlice.actions.addSong() este es un action
export const songsReducer = songsSlice.reducer;

//console.log(reset.type)