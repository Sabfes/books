import React from "react"
import './ProfilePage'
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ProfilePage = () => {
    const {profileAvatarSrc, name} = useTypedSelector( state => state.profile)

    return <div className="ProfilePage">
        <img src={profileAvatarSrc} alt="avatar" height="400px"/>
        <h1>{name}</h1>
    </div>
}

export default ProfilePage
