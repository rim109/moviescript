import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css"
import LikeButton from "../Components/LikeButton";


const MovieDetail = () => {
  const param = useParams()
  const [movie, setMovie] = useState()
  console.log(param)

  
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${param.movieId}`,
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_tmDB_apikey
      },
    })
      .then((res) => {
        setMovie(res.data)
        console.log(res)
      });
  }, []);

  return (
    <>
    <div className="movie-info">
      {movie ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img> : null}
      <span className="movie-title">{movie? movie.title : null} </span> </div>
      <span className="movie-text">{movie? movie.overview : null}</span>
      <span className="movie-day">{movie? movie.release_date: null}</span>
      <span className="movie-vote">{movie? movie.popularity: null}</span>
      <span className="movie-lang">{movie? movie.original_language: null}</span>
      <LikeButton/>
      
    

    </>
  )
}

export default MovieDetail