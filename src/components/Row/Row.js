import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from '../assets/axios'
import "./Row.css"
import Fade from 'react-reveal/Fade';



const base_url = 'http://image.tmdb.org/t/p/original/';


const Row = ({ title, fetchUrl, isLargeRow }) => {    
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(fetchUrl);
                    setMovies(request.data.results)  
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleClick = (movie) => {
        if (trailerUrl){
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v')); 
            })
            .catch((error) => {
                console.log(error.message);
            })
        }
    }

  return (
    <>
        <Fade bottom>
            <div className="row">
                <h2>{title}</h2>
                <div className="row_posters">
                    {movies.map(movie => {
                        return (
                            <img 
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                                key={movie.id} 
                                onClick={() => handleClick(movie)}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                alt={movie.name} 
                            />
                        )
                    })}
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </Fade>
    </>
  )
}

export default Row