import React, { Component } from 'react';

// Using this catches an error if some other component fails
class ErrorBoundary extends Component {
    constructor(props) {
            super(props); 
                this.state = {
                    hasError: false
                }
            }
            

// This is a lifecycle method:
// It's like a Try/Catch block.  Any errors will run this lifecycle block:

componentDidCatch(error, info) {
    this.setState({hasError: true })
    // what happens next is render will trigger it's fors if statement on line 22.
}
    


    render() {
        // if this.state.hasError is true:
        if (this.state.hasError) {
            return <h1>Ooooops. That is not good</h1>
          
        } 
        //we dont need an else because the return above will stop the function
        // If we call the children then everything will return the values and functions
        //that it normally would
        return this.props.children 
    }

}   



export default ErrorBoundary;