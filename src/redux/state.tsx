import {ActionsProfileType} from "./profile-reducer";
import {SidebarType} from "./sidebar-reducer";
import {ActionsUsersType} from "./users-reducer";
import {ProfilePageType} from "../components/Profile/MyPosts/MyPosts";
import {DialogPageType} from "../components/Dialogs/Dialogs";
import {ActionsDialogsType} from "./dialogs-reducer";


/*export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}*/
/*export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}*/
/*export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}*/

/*export type SidebarType = {}*/


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

/*export type ActionType = AddPostActionType
    | OnPostChangeActionType
    | FollowActionCreatorType
    | UnfollowActionCreatorType
    | SetUsersActionCreatorType*/


export type StoreType = {
    _state: StateType
    _callSubcsriber: CallSubscriberType
    getState: GetStateType
    subscribe: SubscribeType
    dispatch: DispatchType
}

export type CallSubscriberType = () => void;
export type SubscribeType = (state: CallSubscriberType) => void;
export type GetStateType = () => StateType;
export type DispatchType = (action: ActionsDialogsType | ActionsProfileType | ActionsUsersType) => void


  /*export let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11}
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },
    _callSubcsriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubcsriber = observer;
    },

    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = gialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubcsriber();
    }
}*/


//types ActionsCreators
//export type AddPostActionCreaterType = () => AddPostActionType
//export type UpdateNewPostTextActionCreaterType = (text:string) => OnPostChangeActionType
//export type UpdateNewMessageBodyActionCreatorType = (body: string) => UpdateNewMessageBodyType
//export type SendMessageActionCreatorType = () => SendMessageActionType




//types of Actions
/*export type UpdateNewMessageBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newText: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}*/



/*export type AddPostActionType = {
    type: 'ADD-POST'
}
export type OnPostChangeActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}*/
/*export type UpdateNewMessageBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}*/

//type of reducers(profile, dialog, sidebar, users)
/*export type ProfileReducerType = {
    posts: Array<PostType>
    newPostText: string
}*/
/*export type DialogsReducerType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}*/


/*export type SidebarReducerType = any*/

