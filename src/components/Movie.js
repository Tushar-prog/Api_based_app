import React from 'react';
import { useParams} from 'react-router-dom';
import BreadCrumb from './BreadCrumb';
import Grid from './Grid/Grid';
import MovieInfo from './MovieInfo';
import Spinner from './Spinner';
import { IMAGE_BASE_URL,POSTER_SIZE } from '../config';
import MovieInfoBar from './MovieInfoBar';
import Noimage from '../images/no_image.jpg';
import {useMovieFetch } from '../Hooks/useMovieFetch'
import Actor from './Actor';
const Movie =()=>{
    const {movieId} =useParams();
    const { state : movie ,loading,error}=useMovieFetch(movieId);
    if(loading) return <Spinner/>
    if (error) return <div> Sommething Went wrong..</div>
    return (
        <>
    <BreadCrumb movieTitle ={ movie.original_title }/>
    <MovieInfo movie ={movie}/>
    <MovieInfoBar
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
        />
       <Grid header='Actors'>
          {movie.actors.map(actor => (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : Noimage
              }
            />
          ))}
        </Grid>
    </>
    );
    
};
export default Movie;