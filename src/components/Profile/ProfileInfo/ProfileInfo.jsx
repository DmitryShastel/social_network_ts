import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div >
                <img  className={s.img}
                    src='https://c4.wallpaperflare.com/wallpaper/203/814/445/download-full-size-nature-1920x1200-wallpaper-preview.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;