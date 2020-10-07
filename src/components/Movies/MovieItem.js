import React from 'react';
import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
    return (
       
            <div className='col-3 mt-2 movie'> 
            <Link to={`/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='poster' />
            </Link >
                 <h4>{movie.title}</h4>
            </div>
        
    );
}

export default MovieItem;