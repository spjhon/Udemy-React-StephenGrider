import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {faker} from '@faker-js/faker';

const albumsApi = createApi ({
    reducerPath: 'albums',
    //fetchBaseQuery es una forma opitionanda del fetch que esta por defecto en el navegador
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    //los endpoints son los diferentes request que se va a hacer al servidor
    endpoints(builder) {
        return {

            //mutation quiere decir que se va a cambiar el dato ya sea borarlo, adicionarlo o modificarlo
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    
                    return [{type: 'Album', id: album.id}];
                },
                query: (album) => {
                    return {
                        method: 'DELETE',
                        url: `/albums/${album.id}`,
                    };
                },
            }),

            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'UsersAlbums', id: user.id}]
                },
                query: (user) => {
                    return{
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        },
                    };
                },
            }),

            //query es mas para modificar los datos
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result.map(album => {
                        return {type: 'Album', id: album.id}
                    });
                    tags.push({type: "UsersAlbums", id: user.id});

                    return tags;
                    //return [{ type: 'Album', id: user.id}];
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id,
                        },
                        method: 'GET',
                    };
                },
            }),
            
        };
    },
});

//estos exportes salen de la construccio que la funcion create api funciona y devuelve para que sea utilizado en el slice
export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };


