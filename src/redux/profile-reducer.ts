import {PostType, ProfilePageType} from "./store";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how a you', likesCount: 11},
        {id: 2, message: "It's My first post", likesCount: 12}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        }
        case "UPDATE_NEW_POST_TEXT": {
            return {...state, newPostText: action.newText};
        }
        default:
            return state;

    }
}

type addPostActionCreatorType = { type: 'ADD-POST' }
type updateNewPostTextActionCreator = { type: 'UPDATE_NEW_POST_TEXT', newText: string }
export type ActionProfileType = addPostActionCreatorType | updateNewPostTextActionCreator

export let addPostActionCreator = (): addPostActionCreatorType => ({type: 'ADD-POST'})
export let updateNewPostTextActionCreator = (text: string): updateNewPostTextActionCreator => {
    return {type: 'UPDATE_NEW_POST_TEXT', newText: text}
}