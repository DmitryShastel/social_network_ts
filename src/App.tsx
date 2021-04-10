import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


/*type AppType = {
    state: StateType
    dispatch:  DispatchType
    store: StoreType
}*/

export const App: React.FC = () => {

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">

          <Route path='/dialogs/'
                 render={() => <DialogsContainer/>}/>
          <Route path='/profile/'
                 render={() => <ProfileContainer/>}/>
            <Route path='/users'
                   render={() => <UsersContainer/>}/>
        </div>
      </div>
  )
}





