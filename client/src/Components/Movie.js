import React from 'react'

function Movie({movie, searchText, searchURL}) {

    const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    // use original for larger pic and backdrop path for background
    console.log(movie)
    return (
        <div>
            <div class="card mb-3">
            <img src={imageURL} className="poster" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{movie.original_title}</h5>
                <p class="card-text">{movie.overview}</p>
                <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
                </p>
            </div>
            </div>
        </div>
    )
}

export default Movie
