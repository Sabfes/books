import React from "react"
import './HomePage.css'
// @ts-ignore
import banner from '../../img/banner.png'
import Card from "../../components/Card/Card";

const HomePage = () => {
    return <div className="HomePage">
        <h1 className="HomePage__title">Книги</h1>
        <img
            src={banner}
            alt="books banner"
            className="HomePage__banner"
        />

        <h2 className="HomePage__title">Новинки</h2>
        <div className="books__container">
            {
                [1,2,3,4,5,6,7,8].map( (el) => {
                    return <Card id={el} />
                })
            }
        </div>

        <h2 className="HomePage__title">Классика</h2>
        <div className="books__container">
            {
                [1,2,3,4,5,6,7,8].map( (el) => {
                    return <Card id={el} />
                })
            }
        </div>
    </div>
}

export default HomePage
