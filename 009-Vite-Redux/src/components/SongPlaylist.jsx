import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data/index";
import { addSong, removeSong, /*store*/ } from "../store";

function SongPlaylist() {
  // To Do:
  // Get list of songs
  const dispatch = useDispatch();
  //y el useSelector es para traer el state
  const songPlaylist = useSelector((state) => {
    
    return state.songs;
  });   // [];

  const handleSongAdd = (song) => {
   
    //cual es la cosa con el action, dentro de cada slice hay propiedades que se pueden aplicar, una de ellas
    //es el actions (songsSlice.actions) que lo que hace es que nos facilita la creaction de actions que es
    //el type y el payload que se envia al slice y de ahi al reducer.
    //OJO, no son las mismas funciones que se encuentran en el slice, esta es exclusiva para mandar actions
    const action = addSong(song);
    
    //console.log(store.getState())
    //store.dispatch({payload: "prueba", type: "song/addSong"})
    dispatch(action);
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
    const action = removeSong(song)
    dispatch(action);
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
