import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {

    store: StoreType
}

export function DialogsContainer(props:DialogsPropsType) {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body:string) => {
        /*let body = e.target.value*/
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs store={props.store}
                 updateNewMessageBody = {onNewMessageChange}
                 SendMessage={onSendMessageClick}
                 dialogsPage={state} />
    );
}