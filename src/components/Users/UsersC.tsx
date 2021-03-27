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
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    }

class Users extends  React.Component <UserType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render () {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i ++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className = {this.props.currentPage === p ? styles.selectedPage: ''}
                        onClick = {() => {this.onPageChanged(p)}}
                        >{p}</span>
                    })
                    }

                </div>
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
















