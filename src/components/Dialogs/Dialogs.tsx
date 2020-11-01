import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType, RootStateType} from "../../redux/state";



type DialogsPropsType = {
    state: DialogsPageType
}

export function Dialogs(props:DialogsPropsType) {
    let dialogsElements = props.state.dialogs.map(d => (
        <DialogItem name={d.name} id={d.id}/>
    ))
    let messagesElements = props.state.messages.map(m => (
        <Message message={m.message} id={m.id}/>
    ))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    );
}