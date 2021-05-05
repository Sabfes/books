import React from "react"
import './ReadLater.css'
import Card from "../../components/Card/Card";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ReadLater = () => {
    const books = useTypedSelector(state => state.books.books)
        .filter(el => el.readLater)

    return <div className="ReadLater">
        <p className="ReadLater__title">Отложенно - {books.length}</p>

        <div className="ReadLater__container">
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

export default ReadLater
