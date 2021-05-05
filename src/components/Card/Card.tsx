import React from "react"
import './Card.css'
import {NavLink} from "react-router-dom";

type PropsTypes = {
    id: number
    name: string
    src: string
    author: string
    rating: number
}

const Card: React.FC<PropsTypes> = ({id, name, src, author, rating}) => {
    return  <NavLink className="link container" to={`/read/${id}`}>
        <img src={src} className="Card" alt="card img"/>
        <h1 className="Card__title">{name}</h1>
        <p className="Card__subtitle">{author}</p>
        <span className="Card__rating">{rating}*</span>
    </NavLink>
}

export default Card
