import React from "react";
import {DialogPageType, Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {sendMessageActionCreator, updateNewMessageBodyCreator, ActionsDialogsType} from "../../redux/dialogs-reducer";


type MapStateToProps = {
    dialogsPage: DialogPageType
}
type MapDispatchToProps = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: StateType): MapStateToProps  => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsDialogsType) => void): MapDispatchToProps => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }

}

export default connect<MapStateToProps, MapDispatchToProps, {}, StateType>
(mapStateToProps, mapDispatchToProps)(Dialogs);











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
