import { connect } from "react-redux";

import { AppState } from "../../core/reducers/rootReducer";
import * as actionTypes from "../../core/actionTypes/lyricsActionTypes";
import LyricsComponent from "./LyricsComponent";

const mapStateToProps = (state: AppState) => {
  return {
    lyrics: state.lyrics.lyrics,
    isLoading: state.isLoading[actionTypes.GET_LYRICS],
    error: state.error[actionTypes.GET_LYRICS]
  };
};

export default connect(
  mapStateToProps,
  null
)(LyricsComponent);
