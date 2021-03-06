import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user-icon.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UserType = {
    users: Array<UsersPropsType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void,
    followingInProgress: Array<number>,
}

export let Users = (props: UserType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className = {props.currentPage === p ? styles.selectedPage : ''}
                             onClick = {() => {
                                 props.onPageChanged(p)
                             }}
                >{p}</span>
            })
            }

        </div>
        {
            props.users.map((u: UsersPropsType) => <div key = {u.id}>
        <span>
            <div>
                <NavLink to = {'/profile/' + u.id}>
                <img src = {u.photos.small != null ? u.photos.small : userPhoto}
                     className = {styles.userPhoto}/>
                     </NavLink>
    </div>
    <div>
    {u.followed
        ? <button disabled={props.followingInProgress.some(id => id === u.id)}  onClick = {() => {
            debugger

            props.toggleFollowingProgress(true, u.id);

            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "9f9da7ee-2def-4ec9-bde3-f37a343d34bd"
                }
            })
                .then(response => {
                    if (response.data.resultCode == 0) {
                        props.unfollow(u.id)
                    }
                    props.toggleFollowingProgress(false, u.id);
                });

        }}>Unfollow</button>
        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick = {() => {

            props.toggleFollowingProgress(true, u.id);

            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "9f9da7ee-2def-4ec9-bde3-f37a343d34bd"
                }
            })
                .then(response => {
                    if (response.data.resultCode == 0) {
                        props.follow(u.id)
                    }
                    props.toggleFollowingProgress(false, u.id);
                });
        }}>Follow</button>}
    </div>
    </span>
                <span>
    <div>{u.name}</div>
    <div>{u.status}</div>
    </span>
                <span>
    <div>{"u.location.country"}</div>
    <div>{"u.location.city"}</div>
    </span>
            </div>)
        }
    </div>

}

