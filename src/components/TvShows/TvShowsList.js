import React from 'react';
import TvShowsItem from './TvShowsItem';

function TvShowsList({ tvshows,loading }) {
    return (
        <>
            {loading ? <h3>Loading ....</h3>:<div className='row movies'>
                {tvshows.map(tvshow => {
                    return (
                        <TvShowsItem tvshow={tvshow} key={tvshow.id} />
                    )
                })}
            </div>}
        </>
    );
}

export default TvShowsList;