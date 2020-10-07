import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import TvActorsList from './TvActors/TvActorsList';

function TvShowsDetails(props) {
    const [tvactors, setTvActors] = useState([])
    const { tvshows } = props
    const id = props.match.params.id;
    const getTvActors = async (id) => {
        await Axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=f44b02db4e5d371e4bf37f5769281d2f&language=en-US&page=1`)
            .then(response => setTvActors(response.data.cast))
    }
    useEffect(() => {
        getTvActors(id)
    }, [tvshows])    
    const rendertvshows = tvshows.filter(tvshow => tvshow.id == id)
    return (
        <div>
            {rendertvshows.map(tvshow => {
                return (
                    <div key={tvshow.id}>
                    <div className='row p-3'  style={{ minHeight: '400px', backgroundColor: 'rgb(64 40 78 / 84%)', color: 'white' }}>
                        <div className='col-6'>
                            <img src={`https://image.tmdb.org/t/p/w500${tvshow.backdrop_path}`} alt='poster' />
                        </div>
                        <div className='col-6'>
                            <h4>{tvshow.title}</h4>
                            <h6>Release date : {tvshow.release_date}</h6>
                            <h4>Overview</h4><p>{tvshow.overview}</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'rgb(245 245 245)',paddingBottom:'50px'}}>
                        <h3>Actors</h3>
                        <TvActorsList tvactors={tvactors}/>
                    </div>
                    </div>
                )
            })}
        </div>
    );
}

export default TvShowsDetails;