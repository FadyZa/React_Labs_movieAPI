const INIT_VALUES = {
    lang: "EN"
}

export default function changeLangReducer(state = INIT_VALUES, action) {
    switch (action.type) {
        case "CHANGE_LANG":
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state
    }

} 