import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {App} from "./index/app.jsx";
import { App1 } from "./apiyoutubedatav3/app1.jsx";
import { App2 } from "./listatareas/app2.jsx";

const hola = document.getElementsByTagName("body");
hola[0].setAttribute("style", "margin:0px");


const router= createBrowserRouter([
  {
    path:"/mypageweb",
    element:<App></App>,
    errorElement:<h1>hola te equivocaste</h1>
  },
  {
    path:"/mypageweb/apiyoutubedatav3",
    element:<App1></App1>
  },
  {
    path:"/mypageweb/listadetareas",
    element:<App2></App2>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router}/>
  
);