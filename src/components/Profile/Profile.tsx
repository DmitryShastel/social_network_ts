import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";
import { PostContainer } from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    store: StoreType
}
export type AddProfileType = {
    profile: ProfileType
}

export const Profile = (props: AddProfileType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <PostContainer/>
        </div>
    )
}

