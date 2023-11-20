import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider} from "react-router-dom";
import {App} from "./index/app.jsx";
import { App1 } from "./apiyoutubedatav3/app1.jsx";
import { App2 } from "./listatareas/app2.jsx";
import { App3 } from "./mycrud/app3.jsx"
import { App4 } from "./appgraficos/main.jsx"

const hola = document.getElementsByTagName("body");
hola[0].setAttribute("style", "margin:0px");


const router= createHashRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<h1>hola te equivocaste</h1>
  },
  {
    path:"/apiyoutubedatav3",
    element:<App1></App1>
  },
  {
    path:"/listadetareas",
    element:<App2></App2>
  },
  {
    path:"/mycrud",
    element:<App3></App3>
  },
  {
    path:"/appgraficos",
    element:<App4></App4>
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router}/>
    
  
);