import {connect} from "react-redux";
import {ActionUsersType, followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import {Users} from "./Users";
import {RootStateType, UserType} from "../../redux/store";



let mapStateToProps = (state: RootStateType) => {

    return {
        users: state.usersPage

    }
}

let mapDispatchToProps = (dispatch: (action:ActionUsersType)=>void)=>{
    return {
        follow: (userId: number) => {dispatch(followAC(userId))},
        unFollow: (userId:number) => {dispatch(unFollowAC(userId))},
        setUsers: (users:Array<UserType>)=>{dispatch(setUsersAC(users))}
    }
}

export const UsersContainer =  connect(mapStateToProps,mapDispatchToProps)(Users);

