import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {faker} from '@faker-js/faker';

const albumsApi = createApi ({
    reducerPath: 'albums',
    //fetchBaseQuery es una forma opitionanda del fetch que esta por defecto en el navegador
    //aqui es donde se dice que no utilice axios sino el fetch del navegador
    //lo que hace es pre-configurar la funcion de fetch del navegador
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005' //a esto se le dice configuration object
    }),
    //los endpoints son los diferentes request que se va a hacer al servidor
    endpoints(builder) {
        return {

            //mutation quiere decir que se va a cambiar el dato ya sea borarlo, adicionarlo o modificarlo
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    //Entonces aqui lo que se esta diciendo es que invalide los tags de ese album con el id de album.id
                    //con el que se genero el request por mutation or fetching
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
                //Este es el tag system el cual lo que haces es hacer un refetching the toda la lista despues
                //de haber agregado un elemento nuevo a la lista, esto con el fin de tener la info lo mas
                //actualizada posible
                //Re-fetching with tags
                //sin embargo se debe de hacer un fine-grian tag invalidation debido a que si no se hace se hara re-fetch mas de lo
                //necesario
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
            //El sistema de tags es para invalidad un fetch que se haya hecho cuando se hace cierta accion como por ejemplo una mutation
            //aqui se puede ver en utilizacion con el fetch solamente
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    //este map es para mapear todos los albunes que se le han hecho fetch y asignarles un type y id 
                    //para poder borrarlos mas facil despues
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


