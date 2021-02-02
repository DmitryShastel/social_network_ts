import React from "react";
import {StoreType} from "../../../redux/state";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreater())
                }
                const onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreater(text);
                    store.dispatch(action)

                }

                return <MyPosts updateNewPostTextActionCreater = {onPostChange}
                                addPost = {addPost}
                                posts = {state.profilePage.posts}
                                newPostText = {state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}


