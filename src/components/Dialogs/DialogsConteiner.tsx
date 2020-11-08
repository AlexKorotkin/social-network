import React, {ChangeEvent} from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";





let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch)=> {
    return {
        updateNewMessageBody: (body: string) => dispatch(updateNewMessageBodyCreator(body)),
        SendMessage: () => dispatch(sendMessageCreator())
    }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);