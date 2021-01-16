import React from "react";
import './index.css'
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, StateType, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state";
import App from "./App";



let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById("root")
    )
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);


