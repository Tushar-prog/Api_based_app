import React,{useEffect, useState} from 'react';
//config
import {  POSTER_SIZE,SEARCH_BASE_URL, POPULAR_BASE_URL,API_KEY,API_URL,IMAGE_BASE_URL,BACKDROP_SIZE} from '../config';
import { useHomeFetch } from '../Hooks/useHomeFetch';
import HeroImage from './HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

import NoImage from '../images/no_image.jpg';
import Button from './Button';

const Home =()=>{
    const {state,loading,errors,searchTerm,setSearchTerm,setIsLoadingMore}=useHomeFetch();
  
    if(errors)return <div>Something Went Wrong...</div>
    return (
        <>
        {!searchTerm && state.results[0]?
           ( <HeroImage  image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}/>):null

        }  
        
         <SearchBar setSearchTerm={setSearchTerm}/>
          <Grid header ={searchTerm?'Search Result':'Popular Movies'}> 
              {state.results.map(movie=>(
                  <Thumb key = {movie.id}
                  clickable 
                   image = {movie.poster_path ? IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path:NoImage
                }
                movieId={movie.id}/>
              ))}

          </Grid>
         {loading && <Spinner/>}
         { !loading&& state.page<state.total_pages&&<Button text='Load More'callback={()=>setIsLoadingMore(true)}/>}

        </>
  
    );
    
    
}
export default Home;