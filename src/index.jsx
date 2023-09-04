import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./index/main.jsx";

const hola = document.getElementsByTagName("body");
hola[0].setAttribute("style", "margin:0px");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main></Main>
  </React.StrictMode>
);