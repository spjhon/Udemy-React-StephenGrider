import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data/index";
import { addSong, removeSong } from "../store";

function SongPlaylist() {
  // To Do:
  // Get list of songs
  const dispatch = useDispatch();
  const songPlaylist = useSelector((state) => {
    console.log(state);
    return state.songs;
  });   // [];

  const handleSongAdd = (song) => {
    console.log(song);
    const action = addSong(song);
    console.log(action);
    dispatch(action);
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
    dispatch(removeSong(song));
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
