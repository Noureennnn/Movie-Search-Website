import React from 'react'
import "../styles/MovieList.css"
import MovieCard from './MovieCard'

function MovieList({movies}){

    return (
        <div className='MovieList'>
            {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
        </div>
  )
}

export default MovieList