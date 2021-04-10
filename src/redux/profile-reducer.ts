import {PostType} from "../components/Profile/MyPosts/MyPosts";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type ActionsProfileType = AddPostActionType | OnPostChangeActionType | SetUserProfileActionType

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: string
    userId: number
    photos: {
        small: null | string
        large: null | string
    }
}

export type ProfileReducerType = {
    posts: Array<PostType>
    newPostText: string
    profile: null
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type OnPostChangeActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: any
}

export const addPostActionCreater = (): AddPostActionType => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreater = (text:string):OnPostChangeActionType => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {type: SET_USER_PROFILE, profile}
}

let initialState: ProfileReducerType = {
    newPostText: "",
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
    profile: null
}

export const profileReducer = (state: ProfileReducerType =  initialState ,action: ActionsProfileType)=> {
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
        case SET_USER_PROFILE: {
            return{ ...state, profile: action.profile}
        }
        default:
            return state;
    }
}

/*export type AddPostActionCreateorType = () => AddPostActionType
export type UpdateNewPostTextActionCreateorType = (text:string) => OnPostChangeActionType
export type SetUserProfileCreateorType = (profile: ProfileType) => SetUserProfileActionType*/