import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType)=> void
}
export function Profile (props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts = {props.profilePage.posts}
                dispatch ={props.dispatch}
                newPostText ={props.profilePage.newPostText}
            />
        </div>
    );
}