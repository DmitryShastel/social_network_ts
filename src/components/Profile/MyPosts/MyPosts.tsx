import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreater, DispatchType, PostType, updateNewPostTextActionCreater} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: DispatchType
}


export const MyPosts = (props:PropsType) => {

    let postsElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
            props.dispatch(addPostActionCreater())
    }

    const onPostChange = () => {
        let text = newPostElement.current && newPostElement.current.value;
        if(text) {
            let action = updateNewPostTextActionCreater(text);
            props.dispatch(action)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}


