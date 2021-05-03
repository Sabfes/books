import {booksState} from "../types/books";

const initialState: booksState = {
    books: ['1984', 'Дориан грей'],
}

export const booksReducer = (state = initialState, action: any): booksState => {
    switch (action.type) {
        default:
            return state
    }
}
