import React from 'react';
import SearchMovies from '../SearchBar/SearchBar';
import MovieItem from './MovieItem';

function MoviesList({ movies,search,loading }) {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <SearchMovies search={search}/>
                </div>
            </div>
            {loading ? <h3>Loading ....</h3>:<div className='row movies'>
                {movies.map(movie => {
                    return (
                        <MovieItem movie={movie} key={movie.id} />
                    )
                })}
            </div>}
        </>
    );
}

export default MoviesList;