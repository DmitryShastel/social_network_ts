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



class Users extends  React.Component <UserType>{

    constructor(props: UserType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            this.props.setUsers(response.data.items);
        });
    }


    render () {
        return (
            <div>
                {
                    this.props.users.map( (u:UsersPropsType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick = {() => {this.props.unfollow(u.id) } }>Unfollow</button>
                                : <button onClick = {() => {this.props.follow(u.id) } }>Follow</button> }
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
        )
    }
}
export default Users;















