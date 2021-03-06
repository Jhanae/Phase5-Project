import React from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import Movie from './Movie';

function SearchPage(){

    const [searchText, setSearchText] = useState("")
    const [movies, setMovies] = useState([])
    const [clicked, setClicked] = useState(false)

    // const URL = 'https://api.themoviedb.org/3/search/movie?api_key=dfb1cba31ae6f1dda39d14acaa225d56';
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=dfb1cba31ae6f1dda39d14acaa225d56&query=${searchText}`
    function handleSubmit(e){
        e.preventDefault()
        fetch(searchURL)
        .then(response => response.json())
        .then(data => setMovies(data.results))
        setClicked(!clicked)
    } 
    // const videoURL = `https://api.themoviedb.org/3/movie/8966/videos?api_key=dfb1cba31ae6f1dda39d14acaa225d56&language=en-US`
    const movieElement = movies.map((item) => <Movie movie={item} setMovieId={item.id} searchURL={searchURL} searchText={searchText}/>)
    

// console.log(movies)
    // if(movies !== ""){
        // let movie = movies.map((item) => <Movie movie={movie}/>)
    // }
    // else{
    //     console.log("No Results")
    // }
    return (
        <div className="searchPage">
            <br/><br/><br/><br/>
            <div className="searchContainer">
            <h1 className="header">Search Movies</h1><br/>
            <form onSubmit={(e) => handleSubmit(e)} >
            <input required type="text" onChange={(e) => setSearchText(e.target.value)} className="searchBox" />
            <br/><br/>
            <button className="searchBtn" type="submit">Search</button>
            </form>
            {clicked ? <p>Showing {movies.length} results for {searchText}.</p> : null}
            </div>
            <br/>
            <div className="row">
            {movieElement}
            </div>
            {/* <br/><br/> */}
        </div>
    )
}
export default SearchPage