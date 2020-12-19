import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewPostText, StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}




