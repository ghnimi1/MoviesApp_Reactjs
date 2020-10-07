import React from 'react';
import ActorItem from './ActorItem';

function ActorsList({actors}) {
    return (
        <div className='scrollmenu' style={{backgroundColor:'rgb(245 245 245)', color:'black'}}>
            {actors.map(actor=>{
                return(
                    <ActorItem actor={actor} key={actor.id} />
                )
            })}
        </div>
    );
}

export default ActorsList;