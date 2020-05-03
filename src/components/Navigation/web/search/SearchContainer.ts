import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setLyrics } from "../../core/actionCreators/lyricsActionCreators";
import { LyricsAction } from "../../core/actionTypes/lyricsActionTypes";
import { getLyrics } from "../../core/actionCreators/lyricsActionCreators";
import SearchComponent from "./SearchComponent";

const mapDispatchToProps = (dispatch: Dispatch<LyricsAction>) => ({
  onSearch: (artist: string, song: string) => {
    dispatch(getLyrics(artist, song));
  },
  onClear: () => {
    dispatch(setLyrics(""));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SearchComponent);
