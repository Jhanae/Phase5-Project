import React from 'react'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";

function MovieElement() {
    let history = useHistory();

    const [movieData, setMovieData] = useState(JSON.parse(localStorage.getItem('movieData')))
    const [watched, setWatched] = useState(false)
    const [trailerPath, setTrailerPath] = useState("")
    const [showTrailer, setShowTrailer] = useState(false)
    const [movieID, setMovieID] = useState(localStorage.getItem('movieID'))
    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    const [favoriteID, setFavoriteID] = useState("")
    const [similar, setSimilar] = useState([])
    const [reviews, setReviews] = useState([])

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
      };

    function handleClick(movie){
        console.log(movie)
        localStorage.setItem('movieData',JSON.stringify(movie))
        history.push('/movie')
      }
      
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

    }
    useEffect(() => {
        async function getSimilarMovies(){
            const url = `https://api.themoviedb.org/3/movie/${movieData.id}/similar?api_key=dfb1cba31ae6f1dda39d14acaa225d56&language=en-US&page=1`
        fetch(url)
        .then(res => res.json())
        .then((data) => setSimilar(data.results))

        }
        getSimilarMovies()
    }, [])
    useEffect(() => {
        async function getMovieReviews(){
            const url = `https://api.themoviedb.org/3/movie/${movieData.id}/reviews?api_key=dfb1cba31ae6f1dda39d14acaa225d56&language=en-US&page=1`
        fetch(url)
        .then(res => res.json())
        .then((data) => setReviews(data.results))

        }
        getMovieReviews()
    }, [])
    const similarRow = similar.map(item => {
        return <div onClick={() => handleClick(item)} class="col mb-1">
            <img className="" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} class="card-img-top" alt="..."/>
        </div>
      })
    // reviews.slice(0,3)
    const review = reviews.slice(2,4).map(item => {
        return <p>{item.content}</p>
    })
    console.log(review)
    
    return (
        <div className=" moviePage">
            {/* <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`} className="card-img-top" alt="..."/>
            </div> */}
            <br/><br/>
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
                        <tr>
                        <th scope="col">Reviews: </th>
                        <td>{review}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="">
                    {watched ? 
                    <button className="watchedBtn col" onClick={() => addToWatchedList()}>Watched✓</button>
                    : 
                    <button className="watchedBtn col" onClick={() => addToWatchedList()}>Watched?</button>
                    }
                    <button className="watchedBtn col" onClick={() => getTrailer()}>Watch Trailer</button>
                    </div>
                {setShowTrailer ? 
                    <ReactPlayer 
                    className="mediaPlayer" 
                    width="100%" 
                    height="480px" 
                    controls 
                    url={trailerPath} />
                : null}
                <h1 style={{"textAlign":"left", "fontWeight":"bold"}}>People also watched</h1>
                 <Slider {...settings}>
                {similarRow}
                </Slider>
            </div>
        </div>
    )
}

export default MovieElement;
