import React from "react";
import './index.css'
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import  {StateType, store} from "./redux/state";
import {App} from "./App";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById("root")
    )
}


rerenderEntireTree();
store.subscribe(rerenderEntireTree);





