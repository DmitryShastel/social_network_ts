import React from "react";
import {
    ActionsUsersType,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersPropsType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./UsersC";
import {StateType} from "../../redux/redux-store";

type MapStateToProps = {
    users: Array<UsersPropsType>
    pageSize: number   //?????
    totalUsersCount: number //????
    currentPage: number //??

}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPropsType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

let mapStateToProps = (state: StateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, StateType>
(mapStateToProps, mapDispatchToProps) (Users);