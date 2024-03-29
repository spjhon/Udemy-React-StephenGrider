import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        //este slice es particular ya que al hacer fetching se deben de tener en cuenta los states de isLoading y error
        //para el proceso de fetching, sin emabrgo el fetchin como tal, la operacion asyncrona y de espera la hace una promesa en otro lado
        //mientras tanto el slice va a tener un state temporal de acuerdo al state de la promesa
        isLoading: false,
        error: null,
    },
    reducers: {}, //Curiosamente esta app no utiliza reducers ya que las funciones de despacho no procesan, solo hacen fetch
    extraReducers(builder) {
        //estos extra reducers son necesarios ya que el action case que es esta escuchando no tiene que ver con el slice como tal
        //el slice es mas para modificar los states mientras que estos son solo para hacer el fetching.
        //fetchUsers que viene desde la importacion viene con un action type de tipo users/fetch, puede este string que se encuentra en l
        //otro archivo llevar cualquier nombre, esa funcion de alla es la que va transmitiendo si es pending, fullfield o error
        builder.addCase(fetchUsers.pending, (state, action) => {
            //Updtae our state object however appropriate
            // to show the user what we are loading data
            state.isLoading = true;
            //console.log(action)
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        ////////////////////////////////////////////////////////////

        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        //////////////////////////////////////////////////////////////

        builder.addCase(removeUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter((user) => {
                return user.id !== action.payload.id;
            });
        });
        builder.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const usersReducer = usersSlice.reducer;