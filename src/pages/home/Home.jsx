/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from "react";
import "./HomeStyle.css";
import axios from "axios";
import { MovieCard } from "../../components/MovieCard";
import { SectionTitle } from "../../components/sectionTitle";
import { useDispatch, useSelector } from "react-redux";
import GetMovies from "../../redux/actions/getMoviesAction";
import searhMovies from "../../redux/actions/searchMoviesAction";
import { languaContext } from "../../context/languageContext";
import { isLoading } from "../../redux/actions/loaderAction";
import { Loader } from "../../components/loader/Loader";

export default function Home() {

    // const [movies, setMovies] = useState([]);
    const [movieQuery, setmovieQuery] = useState("");
    const [pageNum, setPageNum] = useState(1);


    const dispatch = useDispatch();
    const movies = useSelector((state) => state.getMovies.movies)
    // const getCurrLang = useSelector((state) => state.language.lang)

    const { lang, setLang } = useContext(languaContext);
    console.log(lang)

    // const [firstMovie, setFirstMovie] = useState();


    useEffect(() => {
        if (!movieQuery) {
            dispatch(GetMovies(pageNum, lang));
        } else {
            dispatch(searhMovies(pageNum, lang, movieQuery));
        }
    }, [lang, movieQuery, pageNum])



    const getPageNum = (num) => {
        console.log(num)
        setPageNum(num)
    }

    const searchMovie = (e) => {
        console.log(e.target.value);
        setmovieQuery(e.target.value)
    }


    const isLoadingFinish = useSelector((state) => state.isLoading.loading);

    return (
        <>
            {
                movies.length > 0 ? <header style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movies[0].backdrop_path}")` }}>
                </header> : ""
            }

            <SectionTitle title="popular Movies" />
            <form className="d-flex w-75 mx-auto my-4" role="search">
                <input className="form-control me-2" type="search" onChange={(e) => searchMovie(e)} placeholder="Search" aria-label="Search" />
            </form>
            <div className="container mt-2">
                {
                    isLoadingFinish ? <Loader /> : <div className="d-flex flex-wrap justify-content-center gap-5 align-items-center">
                        {movies.map((movie) => <MovieCard img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} title={movie.title} id={movie.id} key={movie.id} />)}
                    </div>
                }


                <nav>
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className={`page-link ${pageNum == 1 && "disabled"}`} onClick={() => setPageNum(pageNum - 1)}>Previous</a>
                        </li>

                        {[...Array(5)].map((ele, index) => {
                            let page = index + 1;
                            return (
                                <li key={page} className={`page-item ${pageNum === page ? "active" : ""}`}>
                                    <a className="page-link" onClick={() => getPageNum(page)}>{page}</a>
                                </li>
                            );
                        })}

                        <li className="page-item">
                            <a className={`page-link ${pageNum == 5 && "disabled"}`} onClick={() => setPageNum(pageNum + 1)} >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}