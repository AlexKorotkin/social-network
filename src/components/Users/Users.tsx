import React from "react";
import { UserType} from "../../redux/store";



type UsersTypeProps = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow:(userId: number) => void
    setUsers: (users:Array<UserType>) => void

}

export let Users = (props:UsersTypeProps ) => {

    return <div>
        {props.users.map(u => <div key={u.id}>!!!!</div>)}
        {/*{*/}
        {/*    props.users.map(u => <div key={u.id}>*/}
        {/*        <span>*/}
        {/*            <div><img  src={u.photoUrl} alt=""/></div>*/}
        {/*            <div>*/}
        {/*                {u.followed ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button> :*/}
        {/*                    <button onClick={() => props.follow(u.id)}>Follow</button>}*/}
        {/*            </div>*/}
        {/*        </span>*/}
        {/*            <span>*/}
        {/*            <span>*/}
        {/*                <div>{u.fullName}</div>*/}
        {/*                <div>{u.status}</div>*/}
        {/*            </span>*/}
        {/*            <span>*/}
        {/*                <div>{u.location.country}</div>*/}
        {/*                <div>{u.location.city}</div>*/}
        {/*            </span>*/}
        {/*        </span>*/}
        {/*        </div>*/}
        {/*    )*/}
        {/*}*/}
    </div>
}