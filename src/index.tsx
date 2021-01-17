import React from "react";
import './index.css'
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from "./redux/state";
import {App} from "./App";


let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById("root")
    )
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);





