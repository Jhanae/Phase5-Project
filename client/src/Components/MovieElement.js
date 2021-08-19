import React from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';

function MovieElement() {
    let history = useHistory();

    const [movieData, setMovieData] = useState(JSON.parse(localStorage.getItem('movieData')))
    const [watched, setWatched] = useState(false)
    const [trailerPath, setTrailerPath] = useState("")
    const [showTrailer, setShowTrailer] = useState(false)
    const [movieID, setMovieID] = useState(localStorage.getItem('movieID'))
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    const [favoriteID, setFavoriteID] = useState("")

    function getTrailer(){
        setShowTrailer(!showTrailer)
        const url = `https://api.themoviedb.org/3/movie/${movieData.id}/videos?api_key=dfb1cba31ae6f1dda39d14acaa225d56`
        fetch(url)
        .then(res => res.json())
        .then((data) => localStorage.setItem("movieID", (data.results[0].key)))

        setTrailerPath(`https://www.youtube.com/embed/${movieID}`)
        console.log(showTrailer)
        
      }
    async function addToWatchedList(){
        setWatched(!watched)
        if(watched === true) { 
        console.log(watched)
        const requestOptions = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({movie_id: movieData.id, profile_id: profile.id, movieName: movieData.title})
        }

        await fetch("http://localhost:3000/favorites", requestOptions)
        .then(res => res.json())
        .then(data => setFavoriteID(data.id))
        }
        // else{
        //     await fetch(`http://localhost:3000/favorites/${favoriteID}`)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        // }
    }
    return (
        <div className=" moviePage">
            {/* <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`} className="card-img-top" alt="..."/>
            </div> */}
            <div className="row">
                <br/><br/><br/>
                <h1>{movieData.title}</h1><br/><br/><br/>
                <div className="col">
                    <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} className="card-img-top" alt="..."/>
                </div>
                <div className="col">
                <table style={{"color":"white"}} className="table ">
                    <tbody>
                        <tr>
                        <th scope="col">Overview: </th>
                        <td>{movieData.overview}</td>
                        </tr>
                        <tr>
                        <th scope="col">Released: </th>
                        <td>{movieData.release_date}</td>
                        </tr>
                        <tr>
                        <th scope="col">Rating: </th>
                        <td>{movieData.vote_average}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="">
                    {watched ? 
                    <button onClick={() => addToWatchedList()}>Watched✓</button>
                    : 
                    <button  onClick={() => addToWatchedList()}>Watched?</button>
                    }
                    <button onClick={() => getTrailer()}>Watch Trailer</button>
                    </div>
                {setShowTrailer ? 
                    <ReactPlayer 
                    className="mediaPlayer" 
                    width="1080px" 
                    height="480px" 
                    controls 
                    url={trailerPath} />
                : null}
            </div>
        </div>
    )
}

export default MovieElement;
