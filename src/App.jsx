import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="page">
    <Router>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
      </Routes>
    </div>
    </Router>
    </div>



  )
}

export default App
