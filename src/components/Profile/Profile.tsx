import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    store: StoreType
    /*profilePage: ProfilePageType
    dispatch: (action: ActionType)=> void*/
}
export function Profile (props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store ={props.store} />
        </div>
    );
}