import React from "react"
import './Read.css'
import Card from "../../components/Card/Card";

const Read = () => {
    const books = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]

    return <div className="Read">
        <h1>Прочитано</h1>

        <div className="Read__container">
            {
                books.map((el, i) => {
                    return <Card key={i} id={i}/>
                })
            }
        </div>
    </div>
}

export default Read
