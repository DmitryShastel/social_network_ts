import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {gialogReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {StoreType} from "./state";

let reducers = combineReducers({
    profilePage :profileReducer,
    dialogsPage :gialogReducer,
    sidebar :sidebarReducer
});

export let store: StoreType = createStore(reducers);
