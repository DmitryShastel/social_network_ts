import {PostType, ProfilePageType} from "../components/Profile/MyPosts/MyPosts";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ActionsProfileType = AddPostActionType | OnPostChangeActionType

export const addPostActionCreater: AddPostActionCreaterType = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreater = (text:string):OnPostChangeActionType => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export type ProfileReducerType = {
    posts: Array<PostType>
    newPostText: string
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type OnPostChangeActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type AddPostActionCreaterType = () => AddPostActionType
export type UpdateNewPostTextActionCreaterType = (text:string) => OnPostChangeActionType

let initialState: ProfileReducerType = {
    newPostText: "",
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
}

export const profileReducer = (state: ProfileReducerType =  initialState ,action: ActionsProfileType):ProfilePageType  => {
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