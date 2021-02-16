import {
    ActionType,
    AddPostActionCreaterType, OnPostChangeActionType,
    PostType,
    ProfilePageType,
    ProfileReducerType,
    UpdateNewPostTextActionCreaterType,
} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostActionCreater: AddPostActionCreaterType = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreater = (text:string):OnPostChangeActionType => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

let initialState= {
    newPostText: "",
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
}

export const profileReducer = (state: ProfileReducerType =  initialState ,action: ActionType):ProfilePageType  => {
    switch (action.type) {
        case ADD_POST:{
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}