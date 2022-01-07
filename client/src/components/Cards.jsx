import React from 'react';
import Card from './Card.jsx'

function Cards({countries}) {
    return (
        <div>
            { countries?.map(c => <Card 
            name={c.name}
            flags={c.flags}
            continent={c.continent}
            id={c.id}
            key={c.id} />)}
        </div>
    )
}

export default Cards;
