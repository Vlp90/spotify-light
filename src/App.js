import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

// create an object to interact with spotify api
// npm i spotify-web-api-js
const spotify = new SpotifyWebApi();

function App() {
  // run Code based on a given condition
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      // connect spotify to react
      spotify.getMe().then(user => {
        console.log("USER Connected", user)
      })

    }

    console.log("I have a token ------>>>", hash);
  }, []);

  return (
    <div className="app">
      {/* {token ? <Player /> : <Login />} */}
      {token ? <h1>I am logged in</h1> : <Login />}
    </div>
  );
}

export default App;
