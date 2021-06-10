import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {StateType} from "../../redux/state";


export type HeaderContainerPropsType = {
    isAuth: boolean,
    login: string,
    setAuthUserDataAC: (userId: string, email: string, login: string) => void
}

class HeaderContainer extends React.Component <HeaderContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserDataAC(id, email, login);
                }

            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)







