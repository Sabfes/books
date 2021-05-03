import React from "react"
import './Navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className="Navbar">
        <h1 className="Navbar__title">Категории</h1>

        <nav className="Navbar__links">
            <NavLink to="/allBooks" className="Navbar__link link">Все книги</NavLink>
            <NavLink to="/readLater" className="Navbar__link link">Отложенные</NavLink>
            <NavLink to="/read" className="Navbar__link link">Прочитанные</NavLink>
        </nav>
    </div>
}

export default Navbar
