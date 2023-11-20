import React from 'react'
import {App} from './apps.jsx'
import './index.css'
import { store } from "./app/store.jsx";
import {Provider} from "react-redux";



export function App4() {
  return (
    <Provider store={store}>
    <App/>
    </Provider>
  )
}

