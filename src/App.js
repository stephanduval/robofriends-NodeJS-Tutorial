// import React from 'react';
//refactored the above line to:

// removed the following line when we changed from classes to hooks to manage states shared between .js components
//import React, { Component } from 'react';
// this is how we do it using hooks
import React, { useState, useEffect, setState } from 'react';
//App.js is a Parent of CardList
import CardList from './CardList';
// robots is no longer used since we use the json data from an external
//import { robots } from './robots';  // We have to {destructure it} because its not set to default export like cards
import SearchBox from './searchBox';
import Scroll from './Scroll.js';
//import ErrorBoundary from './ErrorBoundary';
import './App.css';


 

// in order to change the props to a state (which superceeds props,
// we change this code: 
//const App = () => {  
    //to: 
//class App extends React.Component {
// refactored because of deconstruction on import React { component } from 'react'; to:

// removed the following line when we changed from classes to hooks to manage states shared between .js components
// class App extends Component { 
// this is how we do it using hooks:  We just use a regular function
function App() { 
// going from classes and props to hooks we lose the constructor, super and this.state                             
// we use the UseState hook and destructuring to recreate the state constructor
// First we create an array with the variable that changes and a function that changes the state of that variable
// the useState function takes the initial state of the variable as an argument
// Hooks is not a JS construct, its a bit of react magic
// hole shit is that so much cleaner or what?!
// we are using array destructuring to name our variables
const [robots, setRobots] = useState([])
const [searchfield, setSearchfield] = useState('')
const [count, setCount] = useState(0)

useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    // below function reduced to one line
        .then(response=> response.json())
        .then(users => {setRobots(users)},)
        console.log(count)
},[])

    /*
            .then(response=> {
            return response.json();  // convert respose to JSON
            })

/*
constructor() {
        super()   // we need to call the super before this.  
        this.state = {
            robots: [],  // this is a temporary file that exports an array of robot objects
            searchfield: ''
        }
        console.log('constructor');      
    }
    */

    // we don't use arrow fucntions for REACT parts like this function
    // we don't need componentDidMount anymore because we are using a function instead of the component class
    /*
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        // below function reduced to one line
            .then(response=> response.json())
    */
        /*
                .then(response=> {
                return response.json();  // convert respose to JSON
                })
        */
             // fetch is a function that makes an HTTP request
        // below function reduced to one line
        //    .then(users => this.setState({robots: users}));
             /*
             .then(users => {
                this.setState({robots: users})
            });
        */
    

//onSearchChange is is a random name we chose
// 
// We cast the onSearchChange function to a constant
/*
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) //updates the state of searchfield
    }
*/

const onSearchChange = (event) => {
    setSearchfield(event.target.value) //updates the state of searchfield
}
     
// we no longer need render because we are using the hook!   OMG really?
//    render () {   // class needs a render function 
        const filteredRobots = robots.filter(robots =>{
            // we no longer need .this because we are no longer using a class so we take it out
            // return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())  // lowercase makes comparisons easier
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())  // lowercase makes comparisons easier
        //return name values of the array of objects that includes the search terms
        })

        return robots.length ?
        // Dis plays a loading message if the asynchronous call hasn't come back (this.state.robots.lenght is 0)
        // we no longer need .this so we take it out
        //if (this.state.robots.length === 0) {
        
        <h1>Loading</h1> :
        (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>
           
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>

                <CardList robots={filteredRobots}/>

            </Scroll>
        </div>
            )
    
    }



export default App;