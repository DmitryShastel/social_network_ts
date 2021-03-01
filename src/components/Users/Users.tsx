import React from "react";
import styles from './users.module.css'
import {UsersPropsType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/user-icon.jpg'
import axios from "axios";

export type UserType = {
    users: Array<UsersPropsType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UsersPropsType>) => void
    }

export let Users = (props: UserType) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });

    }

    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick = {() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick = {() => {
                                    props.follow(u.id)
                                }}></button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>




}