// import React from 'react';
//refactored the above line to:
import React, { Component } from 'react';
//App.js is a Parent of CardList
import CardList from './CardList';
// robots is no longer used since we use the json data from an external
import { robots } from './robots';  // We have to {destructure it} because its not set to default export like cards
import SearchBox from './searchBox';
import './App.css';


 

// in order to change the props to a state (which superceeds props,
// we change this code: 
//const App = () => {  
    //to: 
//class App extends React.Component {
// refactored because of deconstruction on import React { component } from 'react'; to:
class App extends Component {                              
    constructor() {
        super()   // we need to call the super before this.  
        this.state = {
            robots: [],  // this is a temporary file that exports an array of robot objects
            searchfield: ''
        }
        console.log('constructor');
    }

    // we don't use arrow fucntions for REACT parts like this function
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        // below function reduced to one line
            .then(response=> response.json())
        /*
                .then(response=> {
                return response.json();  // convert respose to JSON
                })
        */
             // fetch is a function that makes an HTTP request
        // below function reduced to one line
            .then(users => this.setState({robots: users}));
             /*
             .then(users => {
                this.setState({robots: users})
            });
        */
    }

//onSearchChange is is a random name we chose
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) //updates the state of searchfield
    }

     

    render () {   // class needs a render function 
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())  // lowercase makes comparisons easier
        //return name values of the array of objects that includes the search terms
        })
        console.log('render');
        // Dis plays a loading message if the asynchronous call hasn't come back (this.state.robots.lenght is 0)
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
        return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
        </div>
    );
    }
}
}

export default App;