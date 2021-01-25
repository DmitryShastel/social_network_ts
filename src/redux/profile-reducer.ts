import {
    ActionType,
    AddPostActionCreaterType,
    PostType,
    ProfilePageType,
    StateType,
    UpdateNewPostTextActionCreaterType,
} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostActionCreater: AddPostActionCreaterType = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreater: UpdateNewPostTextActionCreaterType = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const profileReducer = (state: ProfilePageType, action: ActionType):ProfilePageType  => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}