import React from "react"
import { useHistory } from "react-router-dom"
import './BooksProfile.css'
import Card from "../../components/Card/Card";

const BooksProfile = () => {
    const history = useHistory()
    const id = history.location.pathname.slice(6)

    return <div className="BooksProfile">
        <h3>Информация по книге</h3>
        <p>Номеро книги - {id}</p>

        <Card  id={+id}/>
    </div>
}

export default BooksProfile
