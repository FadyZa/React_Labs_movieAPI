const INIT_STATE = {
    movies: []
}
export default function MoviesReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_MOVIES":
            return {
                ...state,
                movies: action.payload
            }
        case "SEARCH_MOVIES":
            return {
                ...state,
                movies: action.payload
            }

        default:
            return state
    }
}