import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionType, PostType, RootStateType, StoreType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";


type MyPostsPropsType = {
    /*posts: Array<PostType>
    newPostText: string*/
   /* dispatch: (action: ActionType)=> void*/
    store: StoreType
}


export function MyPostsContainer (props: MyPostsPropsType) {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text:string) => {
            let action = updateNewPostTextActionCreator(text)
            props.store.dispatch(action)
        }

    return (
        <MyPosts posts = {state.profilePage.posts} newPostText ={state.profilePage.newPostText} updateNewPostText = {onPostChange} addPost ={addPost}/>
    )
}
