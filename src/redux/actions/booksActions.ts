import {
    addToReadLaterBooksType,
    deleteFromReadLaterBooksType,
    booksActionsTypes,
    booksAction,
    booksFetchToggleType,
    setFoundBooksType
} from "../types/books";
import {Dispatch} from "redux";
import {getBooks} from "../../api/booksApi";

export const addToReadLaterBooks = (id: number): addToReadLaterBooksType => {
    return {
        type: booksAction.ADD_TO_READ_LATER_BOOKS,
        payload: id
    }
}

export const deleteFromReadLaterBooks = (id: number): deleteFromReadLaterBooksType => {
    return {
        type: booksAction.DEL_FROM_READ_LATER_BOOKS,
        payload: id,
    }
}

export const booksFetchToggle = (bool: boolean): booksFetchToggleType  => {
    return {
        type: booksAction.BOOKS_FETCH_TOGGLE,
        payload: bool,
    }
}

export const setFoundBooks = (books: Array<any>): setFoundBooksType => {
    return {
        type: booksAction.SET_FOUND_BOOKS,
        payload: books,
    }
}

// THUNK

export const fetchBooks = (searchParam: string) => {
    return (dispatch: Dispatch<booksActionsTypes>) => {
        dispatch(booksFetchToggle(true))

        getBooks(searchParam).then(res => {
            dispatch(setFoundBooks(res.data.items))
            dispatch(booksFetchToggle(false))
        })
    }
}
