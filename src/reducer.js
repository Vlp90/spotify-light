// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  //   token:null,
  // Not required log in everytime to debugging with our access token //// TO BE REMOVED AFTER COMPILING
  token:
    "BQCsXQIi28eYxLpDzBslTT6hsFXulPR1Ma0QNsaznvqGjUXiev4fEi298Ld55VE4HabxbDzOWbfU6zVKxC1b9nTpECUXBJs2vun_p4di__wiZXMLfA5gaL3Fs5lOMhW3wgc731yodtqWhoUN-JdS2vfjU1N9vohs",
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

    default:
      return state;
  }
};

export default reducer;
