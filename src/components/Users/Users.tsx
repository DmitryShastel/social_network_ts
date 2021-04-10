import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user-icon.jpg";

export type UserType = {
    users: Array<UsersPropsType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
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
                <img src = {u.photos.small != null ? u.photos.small : userPhoto} className = {styles.userPhoto}/>
    </div>
    <div>
    {u.followed
        ? <button onClick = {() => {
            props.unfollow(u.id)
        }}>Unfollow</button>
        : <button onClick = {() => {
            props.follow(u.id)
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

