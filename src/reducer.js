// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
    token:null,
  // Not required log in everytime to debugging with our access token //// TO BE REMOVED AFTER COMPILING
//   token:"BQAkMkvquZQkhPFZw0jkgXM_mcCFgWXJFpBfpzFx-ccDTm9JZwN3SjwxSWddwqC5mbNFs9uXIGhPVSeq4Bs1c4YXUbHyfFwKs46XXSiENgmqysisaIqjtyPQyYMlk2uAupPy3QXrVV2HqCplmCX4rXH_uAllge16",
    playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  // Action => type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

      case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
