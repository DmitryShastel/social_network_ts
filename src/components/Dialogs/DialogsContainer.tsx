import React from "react";
import {StoreType,} from "../../redux/state";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props:DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
}

    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        < Dialogs updateNewMessageBody = {onNewMessageChange}
                  sendMessage = {onSendMessageClick}
                  dialogsPage={state}
        />
    )
}

