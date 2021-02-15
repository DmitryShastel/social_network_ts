import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {gialogReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StateType = ReturnType<typeof reducers>
export type StoreReduxType = typeof store

let reducers = combineReducers({
    profilePage :profileReducer,
    dialogsPage :gialogReducer,
    sidebar :sidebarReducer
});


let store = createStore(reducers);
export default store;
