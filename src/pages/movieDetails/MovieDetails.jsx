import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SectionTitle } from "../../components/sectionTitle";
import "./MovieDetails.css"
import { useDispatch, useSelector } from "react-redux";
import { isLoading } from "../../redux/actions/loaderAction";
import { Loader } from "../../components/loader/Loader"
import { languaContext } from "../../context/languageContext";
import { apiInstance } from "../../network/apiInstance";

export function MovieDetails() {

    const params = useParams();
    const [movie, setMovie] = useState({});

    // const getCurrLang = useSelector((state) => state.language.lang);

    const { lang, setLang } = useContext(languaContext);

    const dispatch = useDispatch();

    useEffect(() => {
        apiInstance.get(`movie/${params.id}?api_key=19ae77252faf68ff47bb648dec0452c6${lang == "AR" ? "&language=ar-SA" : ""}`).then((res) => {
            console.log(res.data);
            setMovie(res.data)
            dispatch(isLoading(false))

        }).catch((err) => {
            console.log(err);
        })
    }, [lang, params.id])


    const isLoadingFinish = useSelector((state) => state.isLoading.loading);

    return (
        <div dir={lang === "AR" ? "rtl" : "ltr"} >
            <SectionTitle title="movie details" />
            <div class="container mt-5 p-4">

                <div class="row g-4">
                    <div class="col-md-4">
                        <img style={{ boxShadow: "rgba(255, 255, 255, 0.2) 0px 2px 8px 0px", objectFit: "fill" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="w-100 h-100 rounded" alt="..." />
                    </div>
                    <div class="col-md-8">
                        {isLoadingFinish ? <Loader /> : <div>

                            <h2 class="card-title display-2 text-white mb-4 fw-medium">{movie.title}</h2>
                            <div className="d-flex justify-content-start gap-3 my-3 align-items-center">
                                {movie.genres && movie.genres.map((genre) => (
                                    <span className="badge text-bg-dark p-2" key={genre.id}>{genre.name}</span>
                                ))}
                            </div>
                            <div className="d-flex justify-content-start gap-3 my-3 align-items-center">

                                <span className="text-capitalize d-flex gap-1 align-items-center fw-medium text-light"><i class="fa-brands fa-imdb fa-fw text-warning fs-2"></i> {movie.vote_average}/10</span>

                                <span className="text-capitalize d-flex gap-1 align-items-center fw-medium text-light"><i class="fa-regular fa-clock fa-fw text-success"></i> {movie.runtime}Min</span>
                            </div>
                            <p class="text-light">{movie.overview}</p>

                        </div>}

                    </div>
                </div>
            </div>
        </div >
    )

}