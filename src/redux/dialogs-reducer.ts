import {ActionType, DialogsPageType, SendMessage, UpdateNewMessageBody} from "./store";

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Гриша'},
        {id: 2, name: 'Максим'},
        {id: 3, name: 'Петя'},
        {id: 4, name: 'Оля'}
    ],
    messages: [
        {id: 1, message: 'Привет, как дела?'},
        {id: 2, message: 'Я впорядке, а ты?'},
        {id: 3, message: 'Домашку по алгебре сделала?'},
        {id: 4, message: 'Делаю, а ты?'}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {...state, newMessageBody: action.body};
        case 'SEND_MESSAGE':
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: new Date().getTime(), message: body}],
                newMessageBody: ''
            };
        default:
            return state;
    }
}
export let sendMessageCreator = (): SendMessage => ({type: "SEND_MESSAGE"})
export let updateNewMessageBodyCreator = (body: string): UpdateNewMessageBody => ({
    type: 'UPDATE_NEW_MESSAGE_BODY',
    body: body
})