import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AddToFav } from "../redux/actions/addToFavAction";
import { removeMovie } from "../redux/actions/removFromFavAction";

export function MovieCard(props) {

    const getFavMovies = useSelector((state) => state.favoriteList.favMovies);
    const dispatch = useDispatch();

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const isFound = getFavMovies.find((movie) => movie.id === props.id);
        isFound ? setIsFavorite(true) : setIsFavorite(false);

    }, [getFavMovies, props.id]);


    const handleAddToFav = (props) => {

        if (isFavorite) {
            dispatch(removeMovie(props.id));
        } else {
            dispatch(AddToFav(props));
        }
        console.log(getFavMovies)

        setIsFavorite(!isFavorite);
    };

    return (
        <div key={props.id} className="card text-bg-dark mb-3" style={{ maxWidth: "15rem", height: "250px" }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body p-2">
                <div className="my-1 d-flex align-items-center justify-content-between">
                    <h5 className="card-title mt-2 text-truncate">{props.title}</h5>
                    <button onClick={() => handleAddToFav(props)} className="border-0 bg-transparent">
                        <i
                            className={`fa-${isFavorite ? "solid" : "regular"} fa-star fs-3 ${isFavorite ? "text-warning" : ""}`}
                        ></i>
                    </button>
                </div>
                <Link to={`/movieDetails/${props.id}`} className="btn btn-light my-2 d-block text-center">
                    Go Movie Details
                </Link>
            </div>
        </div>
    );
}
