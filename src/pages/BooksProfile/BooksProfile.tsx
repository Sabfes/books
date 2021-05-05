import React from "react"
import { useHistory } from "react-router-dom"
import './BooksProfile.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {addToReadLaterBooks, deleteFromReadLaterBooks} from "../../redux/actions/booksActions";

const BooksProfile = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const id = history.location.pathname.slice(6)
    const book = useTypedSelector(state => state.books.books.filter(el => el.id === +id))

    const addToReadLater = (id: number) => {
        dispatch(addToReadLaterBooks(id))
    }

    const delFromReadLater = (id: number) => {
        dispatch(deleteFromReadLaterBooks(id))
    }


    return <div className="BooksProfile">
        <h3 className="Books__title">Информация по книге - {book[0].name}</h3>

        <div className="Books__container">
            <img className="Books__img" src={book[0].img} alt="book paper"/>

            <div className="Books__info">
                <span className="info-item">Рейтинг: {book[0].rating}</span>
                <span className="info-item">Книга: {book[0].name}</span>
                <span className="info-item">Автор: {book[0].author}</span>
                <span className="info-item">Категории:
                    {book[0].read ? 'Прочитанно' : null},
                    {book[0].readLater ? 'Прочитать позже' : null}
                </span>

                <p className="Books__desc">{book[0].desc || 'Описание отсутсвует'}</p>

                <div>
                    {
                        book[0].read
                            ?   null
                            :   <button className="Books__btn">Прочитанно</button>
                    }
                    {
                        book[0].readLater
                            ?   <button
                                className="Books__btn"
                                onClick={() => delFromReadLater(+id)}
                            >
                                Убрать из отложенных
                            </button>
                            :   <button
                                    className="Books__btn"
                                    onClick={() => addToReadLater(+id)}
                                >
                                    Отложить
                                </button>
                    }
                </div>
            </div>
        </div>
    </div>
}

export default BooksProfile
