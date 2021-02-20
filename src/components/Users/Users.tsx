import React from "react";
import styles from './users.module.css'
import {UsersPropsType} from "../../redux/users-reducer";


export type UserType = {
    users: Array<UsersPropsType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UsersPropsType>) => void

}

export let Users = (props: UserType) => {

    if (props.users.length === 0) {


        props.setUsers (
            [
                {
                    id: 1,
                    followed: true,
                    fullName: 'Dima',
                    status: 'I am boss',
                    location: {city: 'Minsk', country: 'Belarus'},
                    photoUrl: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/04-512.png'
                },
                {
                    id: 2,
                    followed: true,
                    fullName: 'Denis',
                    status: 'I am boss too',
                    location: {city: 'Moscow', country: 'Russia'},
                    photoUrl: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/04-512.png'
                },
                {
                    id: 3,
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am boss too',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    photoUrl: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/04-512.png'
                }
            ]
        )
    }

    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
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
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>




}