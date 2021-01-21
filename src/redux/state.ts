export type MessageType = {
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
    newMessageBody: string
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
    // addPost: AddPostType
    // uodateNewPostText: UpdateNewPostTextType
    dispatch: DispatchType
}

export type CallSubscriberType = () => void;
export type SubscribeType = (state: CallSubscriberType) => void;
export type GetStateType = () => StateType;
export type DispatchType = (action: ActionType) => void
export type AddPostType = () => void
export type UpdateNewPostTextType = (text: string) => void

export type ActionType = AddPostActionType
    | OnPostChangeActionType
    | SendMessageActionType
    | UpdateNewMessageBodyType


export let store: StoreType = {
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
        sidebar: {}
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
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubcsriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubcsriber();

        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubcsriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubcsriber();
        }
    }
}


export type AddPostActionCreaterType = () => AddPostActionType
export type UpdateNewPostTextActionCreaterType = (text: string) => OnPostChangeActionType
export type UpdateNewMessageBodyActionCreatorType = (body: string) => UpdateNewMessageBodyType
export type SendMessageActionCreatorType = () => SendMessageActionType

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type OnPostChangeActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type UpdateNewMessageBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}


//actions:
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


//actionsCreaters:
export const addPostActionCreater: AddPostActionCreaterType = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreater: UpdateNewPostTextActionCreaterType = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const sendMessageActionCreator: SendMessageActionCreatorType = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageBodyActionCreator: UpdateNewMessageBodyActionCreatorType = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

