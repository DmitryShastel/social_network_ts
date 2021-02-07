import React from "react";
import {ActionType, StateType, StoreType} from "../../../redux/state";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

// export type MyPostsContainerPropsType = {
//     store: StoreType
// }

let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
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

export const PostContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)




/*export const MyPostsContainer: React.FC = () => {

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
}*/


