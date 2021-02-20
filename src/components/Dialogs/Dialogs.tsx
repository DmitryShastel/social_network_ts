import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogPageType
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

export const Dialogs = (props:DialogsPropsType) => {
    let state = props.dialogsPage;


    let dialogsElements = state.dialogs.map((d: DialogType) => <DialogItem name={d.name}  key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map((m: MessageType) => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage();
}

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className = {s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea className={s.t}
                        placeholder = "Enter a message"
                                   onChange={onNewMessageChange}
                                   value = {newMessageBody}/></div>
                    <button onClick = {onSendMessageClick} className={s.s}>Send</button>
                </div>
            </div>
        </div>
    )
}

