import React, {useState} from "react"
import './HomePage.css'
// @ts-ignore
import banner from '../../img/banner.png'
import {fetchBooks} from "../../redux/actions/booksActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Card from "../../components/Card/Card";
import {useDispatch} from "react-redux";

const HomePage = () => {
    const [inputValue, setInputValue] = useState('')
    const books = useTypedSelector(state => state.books.foundBooks)
    const dispatch = useDispatch()

    const keyPressHandler = (e: any) => {
        if (e.nativeEvent.code === "Enter") {
            dispatch(fetchBooks(inputValue))
        }
    }

    return <div className="HomePage">
        <img
            src={banner}
            alt="books banner"
            className="HomePage__banner"
        />

        <input
            className="SearchInput"
            value={inputValue}
            placeholder="Поиск книги"
            onChange={(e) => {
                setInputValue(e.target.value)
            }}
            onKeyPress={keyPressHandler}
        />

        <div className="HomePage__container">
            {
                books.map((el, i) => {
                    console.log(el.volumeInfo.imageLinks)
                    return <Card
                        key={i}
                        id={el.id}
                        rating={el.rating}
                        name={el.volumeInfo.title}
                        src={
                            el.volumeInfo.imageLinks
                                ? el.volumeInfo.imageLinks.thumbnail
                                : 'https://junior3d.ru/texture/Бумага/ОбложкиСтарыхКниг/обложки-старых-книг_135.jpg'
                        }
                        author={el.volumeInfo.authors}
                    />
                })
            }
        </div>
    </div>
}

export default HomePage
