import React from 'react';
import { Link } from 'react-router-dom';

function TvShowsItem({tvshow}) {
    return (   
        <div className='col-3 mt-2 movie'> 
        <Link to={`/tv/tvshow/${tvshow.id}`}>
            <img src={`https://image.tmdb.org/t/p/w300${tvshow.poster_path}`} alt='poster' />
        </Link >
             <h4>{tvshow.name}</h4>
        </div>
    );
}

export default TvShowsItem;