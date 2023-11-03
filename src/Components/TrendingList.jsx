import { Button, CardMedia, Typography } from '@mui/material';
import './TrendingList.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Loginicon from './Loginicon';


const TrendingList = () => {
  
    const [movieList, setMovieList] = useState([]);
    const [search, setsearch] = useState("");
    
    useEffect(() => {
        axios({
            method: 'GET',
            url:'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
            headers:
            {
                accept: 'application/json',
                Authorization: process.env.REACT_APP_tmDB_apikey
            }
        })
        .then((res) => {
            setMovieList(res.data.results.slice(0,4))
            console.log(res)
        })
    }, [])


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
          
        {movieList ? movieList.map((movie) => (
          <Card key={movie.id} sx={{ maxWidth: 345, boxShadow: 10 }} >
            <CardMedia
              sx={{ height: 140 }}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.overview}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        )) : <span>null</span>}
    </div>
    </>
    )}

    
export default TrendingList