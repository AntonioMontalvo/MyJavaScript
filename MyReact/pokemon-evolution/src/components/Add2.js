//As usual we acknowledge our application's dependencies.
var React = require("react");
var ReactDOM = require("react-dom");

//Define the Add2 component. 
//Using ES6 we export our class like this. Just add export before the class.
export class Add2 extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			points : 2
		},
		this.handleClick =this.handleClick.bind(this);
	}

	handleClick(e){//this method is to demonstrate a button
		e.preventDefault();
		console.log("I've been cliked");
		this.props.addPoints(this.state.points);
	}

    render() {
        return (
        	<div className = "add2" >
        		<button type="button" className="btn btn-outline-success" onClick={this.handleClick} >Add2</button>
        	</div>
        	   );
    }
}
