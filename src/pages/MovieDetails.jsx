import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import "../styles/MovieDetails.css";
import symbol from "../assets/symbol.png";


function MovieDetails(){
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}&plot=full`)
        .then(res => res.json())
        .then(data => setMovie(data));
    },[id]);
    if (!movie) return <img src={symbol} className='symbol' />
  return (
    <div className='cont'>
        <h1><strong>{movie.Title}</strong></h1>
        <div className='imgtext'>
        <img src={movie.Poster} alt={movie.Title} style={{width : "350px"}} className='post'/> {/* adds the poster for selected movie */}
        <div className='desc'>
        <p className='Plot'>{movie.Plot}</p> {/* adds the movie's plot */}
        <p className='Runtime'>{movie.Runtime}</p> {/* adds the movie's runtime*/}
        <p className='Actors'><strong>Actors:</strong> {movie.Actors}</p> {/*shows the movie's actors */}
        <p className='Rating'><strong>Rating: </strong> {movie.imdbRating}</p> {/*shows the movie's imdb rating */}
        <p className='Awards'><strong>Awards: </strong>{movie.Awards}</p> {/*awards won */}
        <p className='Year'>{movie.Year}</p></div></div> {/*release year of movie */}
    </div>
  );
}

export default MovieDetails