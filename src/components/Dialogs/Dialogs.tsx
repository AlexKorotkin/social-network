import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType, RootStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";



type DialogsPropsType = {
    state: DialogsPageType
}

export function Dialogs(props:DialogsPropsType) {

    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(d => (
        <DialogItem name={d.name} id={d.id}/>
    ))
    let messagesElements = state.messages.map(m => (
        <Message message={m.message} id={m.id}/>
    ))
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div>{dialogsElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder = 'Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}