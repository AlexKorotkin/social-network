import {ActionProfileType, profileReducer} from "./profile-reducer";
import {ActionDialogsType, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {ActionUsersType} from "./users-reducer";

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
    usersPage: Array<UserType>
    sideBar: sideBar
}

export type UserType = {
    id: number
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }
}
// export type UsersType = Array<UserType>



export type ActionType = ActionUsersType & ActionDialogsType & ActionProfileType;

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
        usersPage:
            [
                {
                    id: new Date().getTime(),
                    photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1584427/pub_5e11039b8f011100ad298eed_5e1106265d6c4b00af467849/scale_1200',
                    followed: false,
                    fullName: 'Alex',
                    status: 'I am a boss',
                    location: {city: "Mogilev", country: 'Belarus'}
                },
                {
                    id: new Date().getTime(),
                    photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1584427/pub_5e11039b8f011100ad298eed_5e1106265d6c4b00af467849/scale_1200',
                    followed: false,
                    fullName: 'Bob',
                    status: 'I am a boss too',
                    location: {city: "Minsk", country: 'Russia'}
                },
                {
                    id: new Date().getTime(),
                    photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1584427/pub_5e11039b8f011100ad298eed_5e1106265d6c4b00af467849/scale_1200',
                    followed: false,
                    fullName: 'Mike',
                    status: 'I am a boss too',
                    location: {city: "Moscow", country: 'Russia'}
                }
            ]
        ,
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
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}




