import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./TrendingList.css"
import { useEffect, useState } from "react";
import axios from "axios"
import Loginicon from "./Loginicon";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";



const TrendingList = () => {
    const [page, setPage] = useState(1);

    const [movieList, setMovieList] = useState([]);
    const [search, setsearch] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        axios({
            method: "GET",
            url:"https://api.themoviedb.org/3/trending/movie/day?language=en-US",
            headers:
            {
                accept: "application/json",
                Authorization: process.env.REACT_APP_tmDB_apikey
            }
        })
        .then((res) => {
            setMovieList(res.data.results)
            console.log(res)
        })
    }, [])

    const handlePageChange = (page) => {
      setPage(page);
    };

    const onChange = ((e) => {
      setsearch(e.target.value)
      console.log(Title)
    })

    const Title = movieList.filter((e) => {
      return e.title.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
  })




    return (
      <>
      <Loginicon/>
      <div className="search-text">
      <input className="search-input" type="text" value={search} onChange={onChange} size="100"/>
      {/* <Button> Search</Button> */}
      </div>
      <div className="search-info">
        {search ? Title.map((e) => (<span>{e.title}</span>)): null}
      </div>
        <div className="trending-container">
          
        {movieList ? movieList.slice((page-1)* 4, page * 4).map((movie) => (
          <Card key={movie.id} sx={{ maxWidth: 300, boxShadow: 10 , margin: 1}} >
            <CardMedia
              sx={{ height: 140 }}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title.slice(0,41)}
              </Typography>
              <Typography className="text-typo" variant="body2" color="text.secondary">
                {movie.overview.slice(0,235)}
              </Typography>
            </CardContent>
            <CardActions>
              <div className="button-small">
              <Button size="small">Share</Button>
              <Button size="small" onClick={() => navigate(`/${movie.id}`)}>Learn More</Button></div>
            </CardActions>
          </Card>
        )) : <span>null</span>}
            <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={50}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
    />
    </div>
    </>
    )}

    
export default TrendingList