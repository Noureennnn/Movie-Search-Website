import { useEffect, useState } from 'react';
import SearchBar from '../components/Sgit add .earchBar';
import MovieList from '../components/MovieList';
import logo from '../assets/logo.png';
import '../styles/Home.css';
import symbol from '../assets/symbol.png'

function Home(){
    const [movies,setMovies] = useState([]);
    const fetchMovies = async (query) => {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`); {/*fetches the movie from ombd using the query entered*/}
        const data = await res.json(); 
        setMovies(data.Search || [])
    };
     return (
    <div>
        <img src={logo} className='logo' />
        <SearchBar onSearch={fetchMovies} />
        <MovieList movies={movies} />
    </div>
  )
}

export default Home