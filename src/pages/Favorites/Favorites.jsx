import { useSelector } from "react-redux"
import { MovieCard } from "../../components/MovieCard";
import { useEffect, useState } from "react";

export const Favorite = () => {


    const myFavMovies = useSelector((state) => state.favoriteList.favMovies);

    const [isNoFavs, setIsNoFavs] = useState(true);

    useEffect(() => {
        if (myFavMovies.length !== 0) {
            console.log("there are movies")
            setIsNoFavs(false);
        }
        else {
            setIsNoFavs(true);
        }
    }, [myFavMovies])

    return (
        <div className="container mt-2">
            <div className={` ${isNoFavs ? "" : "d-none"} alert alert-dark text-dark rounded-5 mt-5 text-capitalize text-center`}>no favorite movies added!</div>
            <div className="d-flex flex-wrap justify-content-center gap-5 align-items-center">
                {myFavMovies.map((movie) => <MovieCard img={`https://image.tmdb.org/t/p/w500${movie.img}`} title={movie.title} id={movie.id} key={movie.id} />)}
            </div>
        </div>
    )
}