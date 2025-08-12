import {Link} from "react-router-dom";
import "../styles/MovieCard.css";

function MovieCard ({movie}) {
    return (
    <Link to={`/movie/${movie.imdbID}`} className='MovieCard'>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <h4>{movie.Year}</h4>
    </Link>
  );
}
export default MovieCard