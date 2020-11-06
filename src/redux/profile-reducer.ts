import {ActionType, PostType, ProfilePageType} from "./state";

export const profileReducer = (state:ProfilePageType, action:ActionType) => {

    if (action.type === 'ADD-POST') {
        let newPost: PostType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
        state.newPostText = action.newText;

    }
    return state;
}