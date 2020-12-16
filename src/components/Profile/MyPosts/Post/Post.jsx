import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://newdaynews.ru/pict/arts1/61/25/612588_b.jpg'/>
            {props.message}
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;