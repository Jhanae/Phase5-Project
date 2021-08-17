import React from 'react'

function Movie({movie, searchText, searchURL}) {

    const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    // use original for larger pic and backdrop path for background
    return (
        <div className="searchResults">
            <img src={imageURL} className="poster popularImage" alt="..."/>
            <div className="card-body">
                <h5 >{movie.original_title}</h5>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default Movie
