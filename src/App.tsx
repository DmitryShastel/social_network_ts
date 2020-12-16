import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props: any) => {

   /* let message = state.dialogsPage.messages[0].message
    let message2 = state.dialogsPage.messages[1].message*/

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">

          <Route path='/dialogs/'
                 render={() => <Dialogs state={props.state.dialogsPage} />}/>
          <Route path='/profile/'
                 render={() => <Profile state={props.state.profilePage} />}/>

        </div>
      </div>
  )
}

export default App;


