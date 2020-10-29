import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


export type DialogsItem = {
    id: number
    name: string
}
export type DialogsItemType = Array<DialogsItem>



function DialogsItem(props: DialogsItem) {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>

    );
}
export type Message = {
    id: number
    message: string
}
export type MessageType = Array<Message>

function Message(props: Message) {
    return(
        <div className={s.message}>{props.message}</div>
    );
}

export function Dialogs() {

    let dialogsData: DialogsItemType = [
        {id: 1, name: 'Гриша'},
        {id: 2, name: 'Максим'},
        {id: 3, name: 'Петя'},
        {id: 4, name: 'Оля'}
    ]
    let messagesData: MessageType  = [
        {id: 1, message: 'Привет, как дела?'},
        {id: 2, message: 'Я впорядке, а ты?'},
        {id: 3, message: 'Домашку по алгебре сделала?'},
        {id: 4, message: 'Делаю, а ты?'}
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {
                    dialogsData.map(d => (
                        <DialogsItem name={d.name} id={d.id}/>
                    ))
                }
            </div>
            <div className={s.messages}>
                {
                    messagesData.map(m => (
                        <Message message={m.message} id={m.id}/>
                    ))
                }
            </div>
        </div>
    );
}