import { combineReducers } from "redux";
import changeLangReducer from "./reducers/changeLangReducer";
import FavListReducer from "./reducers/FavListReducer";
import loaderReducer from "./reducers/loaderReucer";
import MoviesReducer from "./reducers/moviesReducer";

export default combineReducers({
    favoriteList: FavListReducer,
    language: changeLangReducer,
    isLoading: loaderReducer,
    getMovies: MoviesReducer
})