//As usual we acknowledge our application's dependencies.
var React = require("react");
var ReactDOM = require("react-dom");

import {Evolution} from './Evolution';

//Define the Reset component. 
//Using ES6 we export our class like this. Just add export before the class.
export class Reset extends React.Component {
	constructor (props){
		super(props);
		this.handleClick =this.handleClick.bind(this);
	}

	handleClick(){
		console.log("I've been cliked");
		this.props.reset();//here we have access to the reset method from the Evolution component
	}
	//on click we access the reset method in the parent component, changing the score to 0.
    render() {
        return (
        	<div className = "reset" >
        		<button type="button" className="btn btn-outline-danger" onClick={this.handleClick} >Did you make a mistake, no worries click here to reset the score.</button>
        	</div>
        	   );
    }
}
