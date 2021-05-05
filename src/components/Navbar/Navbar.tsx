import React from "react"
import './Navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className="Navbar">
        <NavLink to="/" className="Navbar__title link">Найти книгу</NavLink>

        <nav className="Navbar__links">
            <h1 className="Navbar__title">Мои книги</h1>
            <NavLink to="/allBooks" className="Navbar__link link">Все книги</NavLink>
            <NavLink to="/readLater" className="Navbar__link link">Отложенные</NavLink>
            <NavLink to="/read" className="Navbar__link link">Прочитанные</NavLink>
        </nav>
    </div>
}

export default Navbar
