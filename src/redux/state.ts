type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}

 export type StateType = {
     profilePage: ProfilePageType
     dialogsPage: DialogPageType
     sidebar: SidebarType
}

export type StoreType = {
    _state: StateType
    _callSubcsriber: CallSubscriberType
    getState: GetStateType
    subscribe: SubscribeType
    addPost: AddPostType
    uodateNewPostText: UpdateNewPostTextType
}

export type CallSubscriberType = () => void;
export type SubscribeType = (state: StateType) => void;
export type GetStateType = () => void;
export type DispatchType = (action: ActionType) => void
export type AddPostType = () => void
export type UpdateNewPostTextType = (text: string) => void

export type ActionType = AddPostActionType | OnPostChangeActionType


export let store = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11}
            ],
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            dialogs:  [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
        },
        sidebar : {}
    },
    _callSubcsriber(state: StateType) {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: SubscribeType) {
        this._callSubcsriber = observer;
    },

    dispatch(action:ActionType) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubcsriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            //this._state.profilePage = {...this._state.profilePage, newPostText: action.newText};
            this._callSubcsriber(this._state);
        }
    }
}

export type AddPostActionCreaterType = () => AddPostActionType
export type UpdateNewPostTextActionCreaterType = (text: string) => OnPostChangeActionType

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type OnPostChangeActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT =  'UPDATE-NEW-POST-TEXT'

export const addPostActionCreater: AddPostActionCreaterType = () => {
    return { type: ADD_POST}
}
export const updateNewPostTextActionCreater: UpdateNewPostTextActionCreaterType = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

