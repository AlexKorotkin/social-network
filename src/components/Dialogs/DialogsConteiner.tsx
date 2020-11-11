import React from 'react';

import {ActionDialogsType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";





let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionDialogsType)=>void)=> {
    return {
        updateNewMessageBody: (body: string) => dispatch(updateNewMessageBodyAC(body)),
        SendMessage: () => dispatch(sendMessageAC())
    }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);