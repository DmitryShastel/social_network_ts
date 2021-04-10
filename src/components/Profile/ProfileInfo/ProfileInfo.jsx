import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return<Preloader/>
    }
    return (
        <div>
            <div >
                <img  className={s.img}
                    src='https://c4.wallpaperflare.com/wallpaper/203/814/445/download-full-size-nature-1920x1200-wallpaper-preview.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;