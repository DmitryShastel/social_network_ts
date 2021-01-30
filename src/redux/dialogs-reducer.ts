import {
    ActionType, DialogPageType, DialogsReducerType,
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

let initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],
        newMessageBody: "",
}

export const gialogReducer = (state: DialogsReducerType = initialState, action: ActionType): DialogPageType => {
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

