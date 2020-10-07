import React from 'react';

function TvActorsItem({actor}) {
    return (
        <div>
                <img style={{borderRadius:'5px'}} src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt='actor' />
                <h4>{actor.name}</h4>
                
        </div>
    );
}

export default TvActorsItem;