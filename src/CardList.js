import React from 'react';
// CardList is a parent of Card
import Card from './Card';

const CardList = ({robots}) => { 
    if (true) {
        throw new Error('Noooo!');
    } // we gave CardList access to robots in the index.js file
    
    const cardsArray = robots.map((user, i ) => {  // we assign i to index, is the first property of the object 
        return ( // use the bracket to return on multiple lines
        <Card
        key={robots[i].id}  //This is good because it's 
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        />
        );
    })
    return (
        <div>
        {cardsArray} 
        </div>

    )
}
 
export default CardList;