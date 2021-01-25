import {
    ActionType, DialogPageType,
    PostType,
    SendMessageActionCreatorType,
    StateType,
    UpdateNewMessageBodyActionCreatorType
} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const sendMessageActionCreator: SendMessageActionCreatorType = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageBodyActionCreator: UpdateNewMessageBodyActionCreatorType = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export const gialogReducer = (state: DialogPageType, action: ActionType): DialogPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}


