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
let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';
 export let store = {
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
        console.log('');
    },
     getState() {
        return this._state
     },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this.callSubscriber(this._state);
            this._state.profilePage.newPostText = '';
        }else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.NewText;
            callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if(action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state);
        }
    }
 }
export  let addPostActionCreator = () =>{
    return {type: ADD_POST}
};
export let updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text})
export let sendMessageCreator = () =>({type: SEND_MESSAGE})
export let updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body})

/* let rerenderEntireTree=()=>{
    console.log('');
}*/

/*let state: RootStateType = {
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
        ]
    },
    sideBar: {}
}*/

/*export function addPost() {
    let newPost = {id: 5, message: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
}*/
/*export function updateNewPostText(NewText: string) {
    state.profilePage.newPostText = NewText;
    rerenderEntireTree(state);
}*/

/*export let subscribe = (observer) => {
    rerenderEntireTree = observer
}*/
export default store;
