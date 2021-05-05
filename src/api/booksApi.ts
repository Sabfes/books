import axios from "axios";

export const getBooks = (searchParam: string) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchParam}&maxResults=40&langRestrict=ru&orderBy=relevance`)
}

