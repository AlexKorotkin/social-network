import {ActionType, DialogsPageType} from "./state";

 export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
        state.newMessageBody = action.body;
    } else if (action.type === 'SEND_MESSAGE') {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({id: new Date().getTime(), message: body})
    }
    return state;
}