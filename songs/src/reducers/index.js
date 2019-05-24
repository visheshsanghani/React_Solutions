import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: " pehla gana", duration: "1:01" },
    { title: " dusra gana", duration: "2:02" },
    { title: " tesraa gana", duration: "3:03" },
    { title: " chotha gana", duration: "4:04" },
    { title: " paanchva gana", duration: "5:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
