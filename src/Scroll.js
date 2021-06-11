import React from 'react';

// This code <div style='{{}}'>  on line 8
// Is JS expression that containts an object,
const Scroll = (props) => {

    return(
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
        { props.children  // children is an object containingeverything below the parent (including content
    // wrapped in the scroll function)
        }
        </div>
    );
};

export default Scroll;