import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "../../../redux/state";

type MessagePropsType = {
    message: string
    id: number
}

export function Message(props:MessagePropsType) {
    return(
        <div className={s.message}>{props.message}</div>
    );
}

