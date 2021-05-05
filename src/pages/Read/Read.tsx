import React from "react"
import './Read.css'
import Card from "../../components/Card/Card";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Read = () => {
    const books = useTypedSelector(state => state.books.books).filter(el => el.read)

    return <div className="Read">
        <p className="Read__title">Прочитано - {books.length}</p>

        <div className="Read__container">
            {
                books.map((el, i) => {
                    return <Card
                        key={i}
                        id={el.id}
                        rating={el.rating}
                        name={el.name}
                        src={el.img}
                        author={el.author}
                    />
                })
            }
        </div>
    </div>
}

export default Read
