import axios from "axios";
import { myStore } from "../redux/store";
import { isLoading } from "../redux/actions/loaderAction";

export const apiInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

// Interceptor: 
apiInstance.interceptors.request.use(function (config) {
    console.log(config)
    myStore.dispatch(isLoading(true))

    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
apiInstance.interceptors.response.use(function (response) {
    myStore.dispatch(isLoading(false))
    return response;
}, function (error) {
    return Promise.reject(error);
});
