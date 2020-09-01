// rfce
import React from "react";
import "./Body.css";
import Header from './Header.js'

function Body({spotify}) {
  return (
    <div className="body">
    <Header spotify={spotify} />
      <h1>i AM Body</h1>
    </div>
  );
}

export default Body;
