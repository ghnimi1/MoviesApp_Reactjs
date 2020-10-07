import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import MoviesList from './components/Movies/MoviesList';
import { Route, Switch } from 'react-router-dom';
import MoviesDetails from './components/MoviesDetails/MoviesDetails';
import Header from './components/Header/Header';
import TvShowsList from './components/TvShows/TvShowsList';
import TvShowsDetails from './components/TvShowsDetails/TvShowsDetails';

function App() {
  const [movies, setMovies] = useState([])
  const [tvshows, setTvShows] = useState([])
  const [loading, setLoading] = useState(true)

  const getMoviesData = async () => {
    await Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f44b02db4e5d371e4bf37f5769281d2f&language=en-US&page=1')
      .then(response => setMovies(response.data.results))
    setLoading(false)
  }
  const getTvData = async () => {
    await Axios.get('https://api.themoviedb.org/3/tv/popular?api_key=f44b02db4e5d371e4bf37f5769281d2f&language=en-US&page=1')
      .then(response => setTvShows(response.data.results))
    setLoading(false)
  }

  const search = (term) => {
    if (term === '') return
    setMovies(movies.filter(movie => movie.title.toLowerCase() == term.toLowerCase()))
  }

  useEffect(() => {
    getMoviesData()
    getTvData()
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path='/' component={() => <MoviesList movies={movies} loading={loading} search={search} />} />
          <Route exact path='/:id' component={(props) => <MoviesDetails movies={movies} {...props} />} />
          <Route exact path='/tv/tvshow' component={() => <TvShowsList tvshows={tvshows} loading={loading} />} />
          <Route exact path='/tv/tvshow/:id' component={(props) => <TvShowsDetails tvshows={tvshows} {...props} />} />
        </Switch>
      </div>
    </>
  );
}

export default App;
