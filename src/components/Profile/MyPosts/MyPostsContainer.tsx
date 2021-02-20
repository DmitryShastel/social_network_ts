import React from "react";
import {StateType} from "../../../redux/state";
import {ActionsProfileType, addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

/*type MapStateToProps = {
    profilePage: ProfilePageType
}*/

type MapDispatchToProps = {
    onPostChange: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsProfileType) => void) => {
    return {
        onPostChange: (text: string) => {
            let action = updateNewPostTextActionCreater(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreater())
        }
    }
}

export const PostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)





