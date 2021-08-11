import React from 'react'
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Movie from './Movie';

function SearchPage(){

    const [searchText, setSearchText] = useState("")
    const [movies, setMovies] = useState([])
    const [movieId, setMovieId] = useState("")
    // const [movie, movieElement] = useState([])
    const URL = 'https://api.themoviedb.org/3/search/movie?api_key=dfb1cba31ae6f1dda39d14acaa225d56';
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=dfb1cba31ae6f1dda39d14acaa225d56&query=${searchText}`
    async function handleSubmit(e){
      e.preventDefault()
      
        const res = await fetch(searchURL);
        const movies = await res.json();
        setMovies(movies.results)
    } 
    const videoURL = `https://api.themoviedb.org/3/movie/8966/videos?api_key=dfb1cba31ae6f1dda39d14acaa225d56&language=en-US`
    const movieElement = movies.map((item) => <Movie movie={item} setMovieId={item.id} searchURL={searchURL} searchText={searchText}/>)
    

// console.log(movies)
    // if(movies !== ""){
        // let movie = movies.map((item) => <Movie movie={movie}/>)
    // }
    // else{
    //     console.log("No Results")
    // }
    return (
        <div>
            <h1 className="header">Search Movies</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
            <div class="col-md-6 mb-3">
            <label for="validationServer01">Title:    </label>
            <input onChange={(e) => setSearchText(e.target.value)} type="text" className="form-control is-valid mb-3" id="validationServer01" required/>
            <br/>
            <button className="btn primary mb-3" type="submit">Search</button>
            </div>
            </form>
            <ReactPlayer 
            className="mediaPlayer" 
            width="1080px" 
            height="480px" 
            controls 
            url={videoURL} 
            // onReady onStart onPause onEnded onError
            />
            {movieElement}
        </div>
    )
}
export default SearchPage