// import React from 'react';
//refactored the above line to:
import React, { Component } from 'react';
//App.js is a Parent of CardList
import CardList from './CardList';
import { robots } from './robots';  // We have to {destructure it} because its not set to default export like cards
import SearchBox from './searchBox';




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
            robots: robots,
            searchfield: ''
        }
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
        return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
        </div>
    );
}
}

export default App;