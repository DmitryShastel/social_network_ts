import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {DispatchType, PostType, StoreType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostTextActionCreater: (text:string) => void
    addPost: () => void
}


export const MyPosts = (props:MyPostsPropsType) => {

    let postsElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
            props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current && newPostElement.current.value;
        text && props.updateNewPostTextActionCreater(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}


