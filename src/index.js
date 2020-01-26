import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi() {
  return <p>Hi</p>;
}

ReactDOM.render(<Hi />, document.getElementById("app"));
