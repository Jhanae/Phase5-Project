import React from 'react'
// import {useState } from 'react'
import ReactPlayer from 'react-player';

function Trending({trending, setTrailer, trailer}) {
    console.log(trending)
    // const [movieID, setMovieID] = useState("")
    
    
    function handleClick(movieData){
        // setMovieID(movieData.id)
        getURL(movieData.id)
    }
    function getURL(movieID){
        const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=dfb1cba31ae6f1dda39d14acaa225d56`
        fetch(url)
        .then(res => res.json())
        .then((data) => generateTrailerURL(data.results[1].key))
    }
    function generateTrailerURL(path){
        setTrailer(`https://www.youtube.com/embed/${path}`)
    }


    const trendingPoster = trending.map(item => {
        return <div className="col text-white" onClick={() => handleClick(item)}>
        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img trending-img" alt="..."/>
        <div className="card-img-overlay">
        {/* {item.title ? <h3 className="card-title">{item.title}</h3> :  <h5 className="card-title">{item.name}</h5>} */}
        </div>
        </div>
    })
    return (
        <div className="trending-div">
            <div className="row trending-img">
                {trendingPoster}
            </div>
                <ReactPlayer 
            className="mediaPlayer" 
            width="1080px" 
            height="480px" 
            controls 
            url={trailer} />
        </div>
    )
}

export default Trending
