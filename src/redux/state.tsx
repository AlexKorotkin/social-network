
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
}

export type sideBar = {}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: sideBar
}

 let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how a you', likesCount: 11},
            {id: 2, message: "It's My first post", likesCount: 12}
        ]
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
}

export default state;
