import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsReducer } from "./slices/albumsSlice";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        albums: albumsReducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },
    //este middleware es codeigo que se agrega para poder que la api funcione
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(photosApi.middleware);
    },
});

//temporal
//window.store = store;

//setupListeners es tambien parte del boilerplate
setupListeners(store.dispatch);


//Este export es todo lo de los thunks para que se trasmita la info desde el store de redux para mejor orden de datos

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser'

export * from './thunks/fetchAlbums';
export * from './thunks/addAlbums';
export * from './thunks/removeAlbum'


export {useFetchPhotoQuery, useAddPhotoMutation, useRemovePhotoMutation} from './apis/photosApi';