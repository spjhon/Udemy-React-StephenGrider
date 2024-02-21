import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { albumsReducer } from "./slices/albumsSlice";
import { photoReducer } from "./slices/photoSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        albums: albumsReducer,
        photos: photoReducer,
    },
});

//temporal
//window.store = store;



//Este export es todo lo de los thunks para que se trasmita la info desde el store de redux para mejor orden de datos

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser'

export * from './thunks/fetchAlbums';
export * from './thunks/addAlbums';
export * from './thunks/removeAlbum'

export * from './thunks/fetchPhoto';
export * from './thunks/addPhoto';
export * from './thunks/removePhoto'

