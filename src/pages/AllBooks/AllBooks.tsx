import React from "react"
import './AllBooks.css'
import Card from "../../components/Card/Card";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const AllBooks = () => {
    const books = useTypedSelector(state => state.books.books)

    return <div className="AllBooks">
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

export default AllBooks
