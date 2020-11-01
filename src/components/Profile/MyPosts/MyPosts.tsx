import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css';
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


export function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.posts.map(p => (
            <Post message={p.message} likesCount={p.likesCount} id={p.id}/>
        )
    )
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = updateNewPostTextActionCreator(text)
            props.dispatch(action)
        }


    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}
