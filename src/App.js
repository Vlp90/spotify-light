import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  // run Code based on a given condition
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
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
