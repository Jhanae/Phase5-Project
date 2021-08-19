import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Movie({movie}) {

    let history = useHistory();

    const [movieData, setMovieData] = useState(localStorage.getItem('LoggedIn'))
    const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    // use original for larger pic and backdrop path for background
    function handleClick(movie){
        console.log(movie)
        localStorage.setItem('movieData',JSON.stringify(movie))
        history.push('/movie')
      }

    return (
        <div onClick={() => handleClick(movie)} className="searchResults">
            <img src={imageURL} className="poster popularImage" alt="..."/>
            <div className="card-body">
                <h5 >{movie.original_title}</h5>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default Movie
