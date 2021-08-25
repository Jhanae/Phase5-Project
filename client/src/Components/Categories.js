import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function Categories() {
    
    let history = useHistory();

    const [genre, setGenre] = useState([])
    const [movie, setMovie] = useState([])

    function handleClick(movie){
        console.log(movie)
        localStorage.setItem('movieData',JSON.stringify(movie))
        history.push('/movie')
    }

    useEffect(() => {
        fetch("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dfb1cba31ae6f1dda39d14acaa225d56&with_genres=28")
        .then(result => result.json())
        .then(data => setMovie(data.results))
        
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
        .then(data => setMovie(data.results))
    }
console.log(movie)
    const genreButton = genre.map(item => {
        return <button className=" genreBtn" onClick={(e) => getResults(item.id)}>{item.name}</button>
    })

    const movieElement = movie.map(item => {
        return <div className="col categoryResult" onClick={() => handleClick(item)} >
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="popularImage" alt="..."/>
        </div>
    })
    return (
        <div className="categoryPage">
            <h1 className="categoryTitle">Categories</h1>
            <div className="genreContainer">
                {genreButton}
            </div>
            <div className="row">
                {movieElement}
            </div>
        </div>
    )
}

export default Categories
