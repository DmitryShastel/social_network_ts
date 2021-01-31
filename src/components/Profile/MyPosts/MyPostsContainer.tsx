import React from "react";
import {DispatchType, StoreType} from "../../../redux/state";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


export type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props:MyPostsContainerPropsType) => {
    let state = props.store.getState();

    let addPost = () => {
            props.store.dispatch(addPostActionCreater())
    }

    const onPostChange = (text:string) => {
            let action = updateNewPostTextActionCreater(text);
            props.store.dispatch(action)

    }

    return (
       < MyPosts updateNewPostTextActionCreater={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
       />
    )
}


