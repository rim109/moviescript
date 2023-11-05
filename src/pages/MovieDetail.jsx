import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const param = useParams()
  const [movie, setMovie] = useState()
  console.log(param)

  
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${param.movieId}`,
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_tmDB_apikey
      }
    })
      .then((res) => {
        setMovie(res.data)
        console.log(res)
      });
  }, []);

  return (
    <div>
      {movie ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img> : null}
      <span>{movie? movie.title : null}</span>
      <span>{movie? movie.overview : null}</span>
    </div>
  )
}

export default MovieDetail