import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {DispatchType, StateType, StoreType} from "./redux/state";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

type AppType = {
    state: StateType
    dispatch:  DispatchType
    store: StoreType
}

export const App = (props:AppType) => {
    debugger

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">

          <Route path='/dialogs/'
                 render={() => <Dialogs store={props.store} />}/>
          <Route path='/profile/'
                 render={() => <Profile
                     profilePage={props.state.profilePage}
                     dispatch={props.dispatch} />}/>
        </div>
      </div>
  )
}





