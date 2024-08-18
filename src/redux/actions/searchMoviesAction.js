import axios from "axios"
import { apiInstance } from "../../network/apiInstance"

export default function searhMovies(pageNum, getCurrLang, movieQuery) {
    return function (action) {
        return apiInstance.get(`search/movie?api_key=19ae77252faf68ff47bb648dec0452c6&query=${movieQuery}&page=${pageNum}${getCurrLang == "AR" && "&language=ar-SA"}`).then((res) => {
            action({
                type: "SEARCH_MOVIES",
                payload: res.data.results
            })
        })
            .catch((err) => { console.log(err) })
    }
}