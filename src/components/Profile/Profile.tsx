import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}

