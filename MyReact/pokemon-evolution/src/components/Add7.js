//As usual we acknowledge our application's dependencies.
var React = require("react");
var ReactDOM = require("react-dom");

//Define the Add7 component. 
//Using ES6 we export our class like this. Just add export before the class.
export class Add7 extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			points : 7
		}
		this.handleClick =this.handleClick.bind(this);
	}

	handleClick(e){//this method is to demonstrate a button
		e.preventDefault();
		console.log("I've been cliked");
		this.props.addPoints(this.state.points);
	}

    render() {
        return (<div className = "add7" >
        			<button type="button" className="btn btn-outline-success" onClick={this.handleClick}>Add 7</button>
        	   </div>
        	   );
    }
}
