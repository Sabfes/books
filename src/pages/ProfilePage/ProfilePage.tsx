import React from "react"
import './ProfilePage.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ProfilePage = () => {
    const {profileAvatarSrc, name} = useTypedSelector( state => state.profile)

    return <div className="ProfilePage">
        <img src={profileAvatarSrc} alt="avatar" height="400px"/>
        <span className="ProfilePage__name">{name}</span>
    </div>
}

export default ProfilePage
