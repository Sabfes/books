export interface booksState {
    books: Array<book>
    readBooks: Array<book>
    readLaterBooks: Array<book>
    isBooksFetching: boolean
    foundBooks: Array<any>
}

interface book {
    desc: string
    name: string
    author: string
    img: string
    rating: number
    id: number
    read: boolean
    readLater: boolean
}

export enum booksAction {
    GET_READ_BOOKS = 'GET_READ_BOOKS',
    ADD_TO_READ_LATER_BOOKS = 'ADD_TO_READ_LATER_BOOKS',
    DEL_FROM_READ_LATER_BOOKS = 'DEL_FROM_READ_LATER_BOOKS',
    BOOKS_FETCH_TOGGLE = 'BOOKS_FETCH_TOGGLE',
    SET_FOUND_BOOKS = 'SET_FOUND_BOOKS',
}

export interface getReadBooksActionType {
    type: typeof booksAction.GET_READ_BOOKS,
}

export interface addToReadLaterBooksType {
    type: typeof booksAction.ADD_TO_READ_LATER_BOOKS,
    payload: number
}

export interface deleteFromReadLaterBooksType {
    type: typeof booksAction.DEL_FROM_READ_LATER_BOOKS,
    payload: number,
}

export interface booksFetchToggleType {
    type: typeof booksAction.BOOKS_FETCH_TOGGLE,
    payload: boolean,
}

export interface setFoundBooksType {
    type: typeof booksAction.SET_FOUND_BOOKS,
    payload: Array<any>,
}

export type booksActionsTypes = getReadBooksActionType | addToReadLaterBooksType
    | deleteFromReadLaterBooksType | booksFetchToggleType | setFoundBooksType
