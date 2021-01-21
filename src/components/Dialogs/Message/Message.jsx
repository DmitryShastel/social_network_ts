import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.dialog}>
            <img src='https://iconarchive.com/download/i75883/martz90/circle/messages.ico'/>
            {props.message}
            <textarea className={s.t}></textarea>
            <button className={s.s}>Sent</button>
        </div>
    )
}

export default Message;