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
export type SubscribeType = (state: StateType) => void;

let store = {
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
    getState() {
        return this._state;
    },
    _callSubcsriber(state: StateType) {
        console.log('State was changed')
    },
    addPost (postText: string)  {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubcsriber(this._state);
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubcsriber(this._state);
    },
    subscribe(observer: SubscribeType) {
        this._callSubcsriber = observer;
    }
}

export default store;