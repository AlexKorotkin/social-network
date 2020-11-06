import {callSubscriber} from "../index";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type sideBar = {}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: sideBar
}
/*let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';*/

type AddPostActionType = {
    type: "ADD-POST"
}
type  UpdateNewPostText = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}
type  UpdateNewMessageBody = {
    type: "UPDATE_NEW_MESSAGE_BODY"
    body: string
}
type  SendMessage = {
    type: "SEND_MESSAGE"

}

export type ActionType = AddPostActionType | UpdateNewPostText | UpdateNewMessageBody | SendMessage;

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (_state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how a you', likesCount: 11},
                {id: 2, message: "It's My first post", likesCount: 12}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sideBar: {}
    },
    _callSubscriber() {
        alert('ddd');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        /*if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: new Date().getTime(), message: body})
            this._callSubscriber(this._state);
        }
    }*/

}
export let addPostActionCreator = (): AddPostActionType => ({type: 'ADD-POST'})
export let updateNewPostTextActionCreator = (text: string): UpdateNewPostText => {
    return {type: 'UPDATE_NEW_POST_TEXT', newText: text}
}
export let sendMessageCreator = (): SendMessage => ({type: "SEND_MESSAGE"})
export let updateNewMessageBodyCreator = (body: string): UpdateNewMessageBody => ({
    type: 'UPDATE_NEW_MESSAGE_BODY',
    body: body
})

export default store;
