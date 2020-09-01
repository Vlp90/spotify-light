import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

import Player from "./Player";

import { useStateValue } from "./StateProvider";

// create an object to interact with spotify api
// npm i spotify-web-api-js
const spotify = new SpotifyWebApi();

function App() {
  // run Code based on a given condition
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      // connect spotify to react
      spotify.getMe().then((user) => {
        // console.log("USER Connected", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        // console.log("USER Connected", user);

        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });

        spotify.getPlaylist("37i9dQZEVXcD2Y9wKhL8D6").then((response) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          });
        });

        //
      });
    }
    // console.log("I have a token ------>>>", token);
  }, []);

  // console.log("USER Connected", user);
  console.log("USER TOKEN", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
