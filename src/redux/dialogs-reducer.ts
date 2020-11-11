import {DialogsPageType} from "./store";

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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionDialogsType) => {
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
type SendMessageACType = {type: "SEND_MESSAGE"}
type UpdateNewMessageACType = {type: 'UPDATE_NEW_MESSAGE_BODY',body: string}
export  type ActionDialogsType = SendMessageACType| UpdateNewMessageACType
export let sendMessageAC = (): SendMessageACType => ({type: "SEND_MESSAGE"})
export let updateNewMessageBodyAC = (body: string): UpdateNewMessageACType => ({
    type: 'UPDATE_NEW_MESSAGE_BODY',
    body: body
})