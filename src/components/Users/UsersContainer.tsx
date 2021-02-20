import React from "react";
import {ActionsUsersType, followAC, setUsersAC, unfollowAC, UsersPropsType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../redux/redux-store";

type MapStateToProps = {
    users: Array<UsersPropsType>

}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPropsType>) => void
}

let mapStateToProps = (state: StateType): MapStateToProps => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsUsersType) => void): MapDispatchToProps => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, StateType>
(mapStateToProps, mapDispatchToProps) (Users);