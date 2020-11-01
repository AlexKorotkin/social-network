import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/state";

type PostPropsType = {
    message: string
    likesCount: number
    id: number
}

 export function Post(props: PostPropsType){
    return(
        <div className={s.item}>
            <img src="https://i12.fotocdn.net/s121/ebd17d85abbe141b/user_l/2771238153.jpg" alt=""/>
            {props.message}
                <div>
                    <span>like{props.likesCount}</span>
                </div>
        </div>
    );
}