import { createSlice } from "@reduxjs/toolkit";
import { fetchPhoto } from "../thunks/fetchPhoto";
import { addPhoto } from "../thunks/addPhoto";
import { removePhoto } from "../thunks/removePhoto";
import { removeUser } from "../thunks/removeUser";

const photoSlice = createSlice({
  name: "photos",
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

    
    builder.addCase(fetchPhoto.pending, (state, action) => {
      
      state.isLoading = true;
    });
    builder.addCase(fetchPhoto.fulfilled, (state, action) => {
      state.isLoading = false;
      
      
      
      const exists = action.payload.some((newItem) =>
        state.data.some(
          (item) =>
            item.url === newItem.url &&
            item.albumId === newItem.albumId &&
            item.id === newItem.id
        )
      );

      // Si no existe, agregar cada nuevo objeto al array state.data
      if (!exists) {
        state.data.push(...action.payload);
      }
    });
    builder.addCase(fetchPhoto.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    ////////////////////////////////////////////////////////////

    builder.addCase(addPhoto.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addPhoto.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addPhoto.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //////////////////////////////////////////////////////////////

    builder.addCase(removePhoto.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removePhoto.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((album) => {
        return album.albumId !== action.payload.albumId;
      });
    });
    builder.addCase(removePhoto.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    ///////////////////////////////////////////////////////////////////

    /* PARA ORGANIZAR
    builder.addCase(removeUser.fulfilled, (state, action) => {
      console.log(action.payload)
      console.log(JSON.parse(JSON.stringify(state)));
      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
    });
    });
*/
  },
});

export const photoReducer = photoSlice.reducer;
