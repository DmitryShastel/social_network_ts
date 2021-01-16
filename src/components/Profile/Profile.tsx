import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText, ProfilePageType, StateType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: (postText: string)=> void
    changeNewPostText: (props: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     changeNewPostText={props.changeNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;