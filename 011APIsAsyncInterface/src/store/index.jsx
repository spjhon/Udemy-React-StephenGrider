import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(albumsApi.middleware).concat(photosApi.middleware);
    },
});

//temporal
//window.store = store;

setupListeners(store.dispatch);


//Este export es todo lo de los thunks para que se trasmita la info desde el store de redux para mejor orden de datos

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser'

//estos otros exports pertenencen a la otra forma de hacer fetching
export {useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation} from './apis/albumsApi';
export {useFetchPhotoQuery, useAddPhotoMutation, useRemovePhotoMutation} from './apis/photosApi';