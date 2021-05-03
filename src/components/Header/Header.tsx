import React from "react"
import './Header.css'
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Header: React.FC = () => {
    const {profileAvatarSrc, name} = useTypedSelector( state => state.profile)

    return <div className="Header">
        <NavLink to="/" className="Header__logo link">BOOK<span>S</span>TORE.</NavLink>

        <NavLink to="/profile" className="profile link">
            <img
                src={profileAvatarSrc}
                alt="avatar"
                className="profile__avatar"
            />
            <span className="profile__name">{name}</span>
        </NavLink>
    </div>
}

export default Header
