import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}

export const Profile: React.FC = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

