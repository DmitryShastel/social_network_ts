import React from "react";
import {StateType, StoreType} from "../../redux/state";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter } from "react-router-dom";

export type ProfilePropsType = {
    store: StoreType
}
export type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

export type UserIdPropsType = {
    userId: string
}

class ProfileContainer extends React.Component <ProfileContainerType & RouteComponentProps<UserIdPropsType>> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '23';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile = {this.props.profile}
                />
            </div>
        )
    }

}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
