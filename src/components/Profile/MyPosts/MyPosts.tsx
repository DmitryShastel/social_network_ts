import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
    profile: any
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    onPostChange: (text:string) => void
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
        text && props.onPostChange(text);
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


