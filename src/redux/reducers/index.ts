import {combineReducers} from "redux";
import {booksReducer} from "./booksReducer";
import {ProfileReducer} from "./ProfileReducer";

export const rootReducer = combineReducers({
    books: booksReducer,
    profile: ProfileReducer,
})

export type RootState = ReturnType<typeof rootReducer>
