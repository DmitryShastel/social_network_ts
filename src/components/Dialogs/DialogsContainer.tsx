import React from "react";
import {StoreType,} from "../../redux/state";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC = () => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;
            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator());
            }
            let onNewMessageChange = (body:string) => {
                store.dispatch(updateNewMessageBodyActionCreator(body))
            }
            return < Dialogs updateNewMessageBody = {onNewMessageChange}
                             sendMessage = {onSendMessageClick}
                             dialogsPage = {state}/>
        }
        }
    </StoreContext.Consumer>
}

