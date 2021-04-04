import React from "react";
import {
    ActionsUsersType,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UsersPropsType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Users} from "./Users";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";

type MapStateToProps = {
    users: Array<UsersPropsType>
    pageSize: number   //?????
    totalUsersCount: number //????
    currentPage: number //??
    isFetching: boolean
    }
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPropsType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (boolean: boolean) => void
}
export type UserType = {
    users: Array<UsersPropsType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UsersPropsType>) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
}

export type UsersContainerPropsType =  MapStateToProps & MapDispatchToProps

export class UsersContainer extends  React.Component <UsersContainerPropsType> {

    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })

    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                setTotalUsersCount = {this.props.setTotalUsersCount}
                currentPage = {this.props.currentPage}
                setCurrentPage = {this.props.setCurrentPage}
                setUsers = {this.props.setUsers}
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                users = {this.props.users}
                onPageChanged = {this.onPageChanged}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
            />

        </>
    }
}

let mapStateToProps = (state: StateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, StateType>
(mapStateToProps, mapDispatchToProps) (UsersContainer);