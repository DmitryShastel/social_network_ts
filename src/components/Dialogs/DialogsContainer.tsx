import React from "react";
import {ActionType, DialogPageType, StateType,} from "../../redux/state";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type MapStateToProps = {
    dialogsPage: DialogPageType
}
type MapDispatchToProps = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
let mapStateToPros = (state: StateType): MapStateToProps  => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void): MapDispatchToProps => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }

}

export default connect<MapStateToProps, MapDispatchToProps, {}, StateType>
(mapStateToPros, mapDispatchToProps)(Dialogs);











/*export const DialogsContainer: React.FC = () => {

    return <StoreContext.Consumer>
        { (store) => {
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
}*/
