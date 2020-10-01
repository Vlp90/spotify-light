import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        // src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        src="https://cdn.dribbble.com/users/441326/screenshots/3165191/spotify-gif---oliver-keane.gif"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
