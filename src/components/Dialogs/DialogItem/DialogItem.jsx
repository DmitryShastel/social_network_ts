import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://img.favpng.com/1/17/24/react-logo-png-favpng-m00s95CAF5ngxbSc2NfvnypRP.jpg'/>
            <NavLink to={path}>{props.name}</NavLink>

        </div>
    )
}

export default DialogItem;