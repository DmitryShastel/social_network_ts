import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {PostType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    addPost: (postText: string)=> void
    posts: Array<PostType>
    newPostText: string
    changeNewPostText: (props: string) => void
}

const MyPosts = (props:PropsType) => {

    let postsElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    let addPost = () => {
            props.addPost(props.newPostText);
        }


    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.changeNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={newTextChangeHandler}/>
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


export default MyPosts;