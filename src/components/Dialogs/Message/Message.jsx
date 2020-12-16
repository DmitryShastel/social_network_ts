import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.dialog}>
            <img src='https://iconarchive.com/download/i75883/martz90/circle/messages.ico'/>
            {props.message}

        </div>
    )
}

export default Message;