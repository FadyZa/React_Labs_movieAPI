const INIT_VALUES = {
    favMovies: []
}

export default function FavListReducer(state = INIT_VALUES, action) {
    switch (action.type) {
        case "ADD_MOVIE_TOFAV":
            return {
                ...state,
                favMovies: [...state.favMovies, action.payload]
            }
        case "REMOVE_MOVIE":
            return {
                ...state,
                favMovies: state.favMovies.filter((movie) => movie.id !== action.payload)
            }
        default:
            return state
    }

} 