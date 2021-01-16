import React from "react";
import './index.css'
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import store, {StateType} from "./redux/state";
import App from "./App";


let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById("root")
    )
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


