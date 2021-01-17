import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {DispatchType, StateType} from "./redux/state";
import {Profile} from "./components/Profile/Profile";

type AppType = {
    state: StateType
    dispatch:  DispatchType
}

export const App = (props:AppType) => {

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">

          <Route path='/dialogs/'
                 render={() => <Dialogs state={props.state.dialogsPage} />}/>
          <Route path='/profile/'
                 render={() => <Profile
                     profilePage={props.state.profilePage}
                     dispatch={props.dispatch} />}/>
        </div>
      </div>
  )
}





