import React from 'react'
import { useState, useEffect } from 'react'

function Categories() {

    const [genre, setGenre] = useState([])
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function getGenre(){
            const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=dfb1cba31ae6f1dda39d14acaa225d56&language=en-US'
            await fetch(url)
            .then(result => result.json())
            .then(data => setGenre(data.genres))
        }
        getGenre()
    }, [])

    async function getResults(genreID){
        const url = `https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=dfb1cba31ae6f1dda39d14acaa225d56&with_genres=` + encodeURI(genreID)
        await fetch(url)
        .then(result => result.json())
        .then(data => setMovie(data))
    }
console.log(movie)
    const genreButton = genre.map(item => {
        return <button className="btn genreBtn" onClick={(e) => getResults(item.id)}>{item.name}</button>
    })

    const movieElement = movie.map(item => {
        return <div className="card-group">
            <img ssrc={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt="..."/>
        </div>
    })
    return (
        <div>
            {genreButton}
            {movieElement}
        </div>
    )
}

export default Categories
