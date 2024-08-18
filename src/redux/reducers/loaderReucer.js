
const INIT_VAL = {
    loading: true
}

export default function loaderReducer(state = INIT_VAL, action) {
    switch (action.type) {
        case "LOADER":
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}