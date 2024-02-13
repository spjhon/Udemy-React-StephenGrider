import { createRandomMovie } from "../data/index";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store";

/*LO QUE ENTRA
- Importa la función createRandomMovie desde el módulo "../data/index".
- Importa las funciones useDispatch y useSelector de "react-redux".
- Importa las acciones addMovie y removeMovie desde el módulo "../store".

ALGORITMO
- Utiliza useDispatch para obtener la función de despacho del store de Redux.
- Utiliza useSelector para obtener la lista de películas (moviePlaylist) del estado del store de Redux.
- Declara funciones handleMovieAdd y handleMovieRemove que, respectivamente, añaden y eliminan películas de la lista de reproducción de películas utilizando las acciones addMovie y removeMovie.
- Mapea la lista de películas (moviePlaylist) para renderizar cada película con un botón de eliminación.

LO QUE RETORNA
- Retorna un componente funcional llamado MoviePlaylist.
  - Contiene un título, "Movie Playlist", y un botón para agregar una película aleatoria a la lista de reproducción.
  - Renderiza la lista de reproducción de películas con un botón de eliminación para cada película.
  - Utiliza las funciones handleMovieAdd y handleMovieRemove para gestionar las acciones relacionadas con las películas.
*/

function MoviePlaylist() {
  const dispatch = useDispatch();
  // To Do:
  // Get list of movies
  const moviePlaylist = useSelector((state) => {
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    // To Do:
    // Add movie to list of movies
    const action = addMovie(movie);
    dispatch(action);
  };

  
  const handleMovieRemove = (movie) => {
    // To Do:
    // Remove movie from list of movies
    const action = removeMovie(movie);
    dispatch(action);

  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
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
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;