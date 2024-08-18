import { apiInstance } from "../../network/apiInstance";

export default function GetMovies(pageNum, getCurrLang) {
    return function (action) {
        return apiInstance.get(`movie/popular?api_key=19ae77252faf68ff47bb648dec0452c6&page=${pageNum}${getCurrLang == "AR" && "&language=ar-SA"}`).then((res) => {
            action({
                type: "GET_MOVIES",
                payload: res.data.results
            })
        }).catch((err) => { console.log(err) })
    }
}