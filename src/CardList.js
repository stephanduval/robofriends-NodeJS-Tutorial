import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {  // we gave CardList access to robots in the index.js file
    const cardComponent = robots.map((user, i ) => {  // we assign i to index, is the first property of the object 
        return ( // use the bracket to return on multiple lines
        <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        />
        );
    })
    return (
        <div>
        {cardComponent} 
        </div>

    )
}
 
export default CardList;