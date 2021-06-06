// this is a destructured form of React.Component
import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render () {
        return (
            // return needs brackets because it is returning multiple things
            // this html in Javascript is called JSX... it's not real HTML tags,
            // It's a fake, virtual DOM but only updates what needs to be updated.
            // we say className because class is a reserved keyword in JS
            // "props" is short for properties
        <div className='f1 tc'>  
        <h1> Hello World</h1>
        <p>{this.props.greeting}</p>
        </div>
        )
}
}

// export default means it exports only one thing (this file)
export default Hello;