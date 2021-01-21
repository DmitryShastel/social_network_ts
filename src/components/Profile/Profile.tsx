import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchType, PostType, StateType} from "../../redux/state";
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePropsType = {
    profilePage: {
        posts: Array<PostType>
        newPostText: string
    }
    dispatch: DispatchType
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch} />
        </div>
    )
}

