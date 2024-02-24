import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
//ojo que en la documentacion de redux puede aparecer sin el react y eso es un problema ya que no se crean los custom actions
import { faker } from "@faker-js/faker";

const photosApi = createApi ({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {

            fetchPhoto: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map ((photo) => {
                        return {type: 'Photo', id: photo.id};
                    });
                    tags.push({type: 'AlbumPhoto', id: album.id});
                    return tags;
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        params: {
                            albumId: album.id
                        },
                        method: 'GET',
                    };
                },
            }),

            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{type: 'AlbumPhoto', id: album.id}]
                },
                query: (album) => {
                    return {
                        method: 'POST',
                        url: '/photos',
                        body: {
                            albumId: album.id,
                            url: faker.image.abstract(150, 150, true)
                        }
                    };
                },
            }),

            removePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{type: 'Photo', id: photo.id}]
                },
                query: (photo) => {
                    return {
                        method: 'DELETE',
                        url: `/photos/${photo.id}`,
                    };
                },
            }),
        };
    },
});

export const {useFetchPhotoQuery, useAddPhotoMutation, useRemovePhotoMutation,} = photosApi;
export {photosApi};