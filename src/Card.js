import React from 'react';


/*
 the HTML-'ese' code below is actually is JSX... that is why we need to import REACT
 (even if we aren't using all the othe REACT features)
*/


// DESTRUCTURING VERSION

    const Card = ({ name, email, id}) => {  // Unpacking fields from objects passed as a function parameter
        return(
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>   
               <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
               <div>
                   <h2>{name}</h2>
                   <p>{email}</p>
               </div>
           </div>
       );
   }
   
   export default Card;


 /*   VERSIONS USING A CONST to shorten the props.variable
 const Card = (props) => {
     // This allows us to refer to name, email, id instead of props.name, props,email, props.id  //cool.
     const { name, email, id } = props;  
    return(
       // <h1>RoboFriends</h1>  - > this line will break the code
        // because we can only return one thing
        // the $ in the Url the ${} is the syntax for variables (or other code to be executed) inside template literals (`).
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>   
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

*/

 /*   VERSION without shortening
  

 const Card = (props) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>   
            <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;

*/