import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data/index";
import { addSong, removeSong, /*store*/ } from "../store";

/*LO QUE ENTRA
- Importa las funciones useDispatch y useSelector de "react-redux".
- Importa la función createRandomSong desde el módulo "../data/index".
- Importa las acciones addSong, removeSong y store desde el módulo "../store".

ALGORITMO
- Utiliza useDispatch para obtener la función de despacho del store de Redux.
- Utiliza useSelector para obtener la lista de canciones (songPlaylist) del estado del store de Redux.
- Declara funciones handleSongAdd y handleSongRemove que, respectivamente, añaden y eliminan canciones de la lista de reproducción de canciones utilizando las acciones addSong y removeSong.
- Mapea la lista de canciones (songPlaylist) para renderizar cada canción con un botón de eliminación.

LO QUE RETORNA
- Retorna un componente funcional llamado SongPlaylist.
  - Contiene un título, "Song Playlist", y un botón para agregar una canción aleatoria a la lista de reproducción.
  - Renderiza la lista de reproducción de canciones con un botón de eliminación para cada canción.
  - Utiliza las funciones handleSongAdd y handleSongRemove para gestionar las acciones relacionadas con las canciones.
*/


function SongPlaylist() {
  // To Do:
  // Get list of songs
  const dispatch = useDispatch();
  //y el useSelector es para traer el state, intente no utilizarlo para otra cosa
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
