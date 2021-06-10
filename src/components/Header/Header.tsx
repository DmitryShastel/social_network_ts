import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean,
    login: string,
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className = {s.header}>
            <img
                src = "https://cdn2.iconfinder.com/data/icons/school-appliances/128/school_knowledge-world-trave-globel-Geography-512.png"/>

            <div className = {s.loginBlock}>{
                props.isAuth ? props.login
                    : <NavLink to = {'/login'}>Login</NavLink>
            }

            </div>
        </header>
    )
}

export default Header;




