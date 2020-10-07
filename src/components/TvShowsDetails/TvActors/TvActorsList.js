import React from 'react';
import TvActorsItem from './TvActorsItem';

function TvActorsList({tvactors}) {
    return (
        <div className='scrollmenu' style={{backgroundColor:'rgb(245 245 245)', color:'black'}}>
            {tvactors.map(actor=>{
                return(
                    <TvActorsItem actor={actor} key={actor.id} />
                )
            })}
        </div>
    );
}

export default TvActorsList;