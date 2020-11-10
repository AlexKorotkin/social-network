import React from "react";
import styles from './users.modules.css';
export let Users = (props)=> {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img className={styles.userPhoto} src={u.photoUrl} alt=""/></div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>
            )
        }
    </div>
}