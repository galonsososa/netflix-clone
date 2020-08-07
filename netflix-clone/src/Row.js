import React, { useState,useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title,fetchUrl,isLargeRow }){

    
    //state is the way of storing variables in react
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    //when Row is executed this will run as well
    //in this case it will be used to make a call to tmdb
    //if [], run just once
    useEffect(() => {
        //make an asynchronous call
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },  [fetchUrl]); //when using useEffect, if there is an outside variable used in it, we need to insert it in the squared brackets

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie.title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    };  

    return (
        <div className = "row">

            <h2>{title}</h2>
            {/* by using posters div we create a container */}
            <div className = "posters">

                {movies.map(movie => (
                    <div key={movie.id} className={isLargeRow?null:'container' }  onClick={() => handleClick(movie)} >
                        <img 
                            className= {`poster ${isLargeRow && "poster_large"}`} 
                            src = {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name} 
                            
                        />
                        
                        <div className="poster_fadeBottom" hidden={isLargeRow}></div>
                        <p className="movie_title" hidden={isLargeRow}>{movie.name || movie.title}</p>   
                    </div>
                ))}
                {/* key optimizes the way react handles lists of items */}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row