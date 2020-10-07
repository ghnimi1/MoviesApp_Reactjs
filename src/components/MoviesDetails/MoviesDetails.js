import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ActorsList from './Actors/ActorsList';

function MoviesDetails(props) {
    const [actors, setActors] = useState([])
    const { movies } = props
    const id = props.match.params.id;
    const getActors = async (id) => {
        await Axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f44b02db4e5d371e4bf37f5769281d2f&language=en-US&page=1`)
            .then(response => setActors(response.data.cast))
    }
    useEffect(() => {
        getActors(id)
    }, [movies])

    const rendermovies = movies.filter(movie => movie.id == id)
    return (
        <div>
            {rendermovies.map(movie => {
                return (
                    <div key={movie.id}>
                    <div className='row p-3'  style={{ minHeight: '400px', backgroundColor: 'rgb(64 40 78 / 84%)', color: 'white' }}>
                        <div className='col-6'>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='poster' />
                        </div>
                        <div className='col-6'>
                            <h4>{movie.title}</h4>
                            <h6>Release date : {movie.release_date}</h6>
                            <h4>Overview</h4><p>{movie.overview}</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'rgb(245 245 245)',paddingBottom:'50px'}}>
                        <h3>Actors</h3>
                        <ActorsList actors={actors}/>
                    </div>
                    </div>
                )
            })}
        </div>
    );
}

export default MoviesDetails;