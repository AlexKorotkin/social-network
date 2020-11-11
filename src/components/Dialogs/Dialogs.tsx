import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/store";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    SendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => (
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    ))
    let messagesElements = state.messages.map(m => (
        <Message key={m.id} message={m.message} id={m.id}/>
    ))
    let newMessageBody = state.newMessageBody;

    let SendMessage = () => {
        props.SendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div>{dialogsElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder={'Enter your message'}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={SendMessage}>Send</button>
                    </div>
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}