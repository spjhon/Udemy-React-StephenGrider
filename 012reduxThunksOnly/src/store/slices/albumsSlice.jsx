import { createSlice } from "@reduxjs/toolkit";
import { fetchAlbums } from "../thunks/fetchAlbums";
import { addAlbums } from "../thunks/addAlbums";
import { removeAlbum } from "../thunks/removeAlbum";
import { removeUser } from "../thunks/removeUser";

const albumsSlice = createSlice({
  name: "albums",
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
    builder.addCase(fetchAlbums.pending, (state, action) => {
      //Updtae our state object however appropriate
      // to show the user what we are loading data
      state.isLoading = true;
      //console.log(action)
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.isLoading = false;

      // Verificar si ya existe algún objeto con las mismas propiedades en state.data
      const exists = action.payload.some((newItem) =>
        state.data.some(
          (item) =>
            item.title === newItem.title &&
            item.userId === newItem.userId &&
            item.id === newItem.id
        )
      );

      // Si no existe, agregar cada nuevo objeto al array state.data
      if (!exists) {
        state.data.push(...action.payload);
      }
    });
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    ////////////////////////////////////////////////////////////

    builder.addCase(addAlbums.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addAlbums.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addAlbums.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //////////////////////////////////////////////////////////////

    builder.addCase(removeAlbum.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeAlbum.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((album) => {
        return album.albumId !== action.payload.albumId;
      });
    });
    builder.addCase(removeAlbum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    ///////////////////////////////////////////////////////////////////

    builder.addCase(removeUser.fulfilled, (state, action) => {
      console.log(action.payload)
      console.log(JSON.parse(JSON.stringify(state)));
      state.data = state.data.filter((album) => {
        return album.userId !== action.payload.id;
    });
    });

  },
});

export const albumsReducer = albumsSlice.reducer;
