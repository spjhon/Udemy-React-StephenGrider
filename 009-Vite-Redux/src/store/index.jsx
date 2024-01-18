import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { configureStore } from "@reduxjs/toolkit"



//este es el store donde se guarda todo el state
const store = configureStore ({
    reducer: {
        songs: songsReducer,  //songsSlice.reducer,
        movies: moviesReducer  // moviesSlice.reducer
    }
});

// console.log(store.getState());

export {store};
export {addSong, removeSong, addMovie, removeMovie};

/* export const {addSong, removeSong} = songsSlice.actions;
export const {addMovie, removeMovie, /*reset} = moviesSlice.actions; */

// console.log(moviesSlice.actions.reset.toString())


// console.log(songsSlice.actions.addSong('Some song'));


/* const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch(
    songsSlice.actions.addSong('Some song!')
);

const finalState = store.getState();
console.log(JSON.stringify(finalState)); */

