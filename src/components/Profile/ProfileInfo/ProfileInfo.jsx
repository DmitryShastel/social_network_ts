import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://media.gettyimages.com/photos/mountains-and-forest-in-winter-yoho-national-park-field-british-picture-id966225494?s=612x612'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;