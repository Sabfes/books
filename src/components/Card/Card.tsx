import React from "react"
import './Card.css'
import {NavLink} from "react-router-dom";

type PropsTypes = {
    id: number,
}

const Card: React.FC<PropsTypes> = ({id}) => {
    return <NavLink className="link container" to={`/read/${id}`}>
        <div className="Card"></div>
        <h1 className="Card__title">Портрет Дориана Грея</h1>
        <p className="Card__subtitle">Оскар Уальд</p>
        <span style={{color: '#E9B839', fontSize: '40px'}}>****</span>
    </NavLink>
}

export default Card
