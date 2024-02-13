import "./styles.css";
import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { reset } from "./store/actions";

/*LO QUE ENTRA
- Es el componente basico principal, por ahora nada le entra

ALGORITMO
- Se inica la App
- Se declara la constante dispatch que utiliza el hook useDispatch para poder mandar ordenes al Slice por medio de
un action customizado e importado desde actions
- Se crea un handleResetClick que despacha el action al Slice que en este caso es un reseteo de toda la app

LO QUE RETORNA
- Retorna un boton con el handleReset con dos componentes que poseen diferentes Slices para crear listas de peliculas en uno y en
otro una lista de canciones utilizando una libreria llamada faker
- Los componentes no poseen props

*/

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    console.log(reset())
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
