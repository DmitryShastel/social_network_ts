import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType, StoreType,} from "../../redux/state";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    store: StoreType
}

export const Dialogs = (props:DialogsPropsType) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map((d: DialogType) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map((m: MessageType) => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
}

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className = {s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder = "Enter a message"
                                   onChange={onNewMessageChange}
                                   value = {newMessageBody}/></div>
                    <button onClick = {onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

