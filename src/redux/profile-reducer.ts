import {ActionType, AddPostActionType, PostType, ProfilePageType, UpdateNewPostText} from "./store";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how a you', likesCount: 11},
        {id: 2, message: "It's My first post", likesCount: 12}
    ],
    newPostText: ''
}

export const profileReducer = (state:ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case "UPDATE_NEW_POST_TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export let addPostActionCreator = (): AddPostActionType => ({type: 'ADD-POST'})
export let updateNewPostTextActionCreator = (text: string): UpdateNewPostText => {
    return {type: 'UPDATE_NEW_POST_TEXT', newText: text}
}