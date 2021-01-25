import React from "react";
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0bb4dead-4326-4997-aa86-027003c1edaa/d4skv1m-55b73631-68cb-4da9-95a1-89d0dcb6b6d9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGJiNGRlYWQtNDMyNi00OTk3LWFhODYtMDI3MDAzYzFlZGFhXC9kNHNrdjFtLTU1YjczNjMxLTY4Y2ItNGRhOS05NWExLTg5ZDBkY2I2YjZkOS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.bjZiRTWDqUs_0b4cc0aiH0FpF8JE7dTVQCQgMk5ZbzY'/>
            {props.message}
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;