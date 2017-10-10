//As usual we acknowledge our application's dependencies.
var React = require("react");
var ReactDOM = require("react-dom");

import {Evolution} from './Evolution';

//This component will help hyde Goodra when the score is 74. 
function ToggleGoodra (props) {
	if(!props.show){
		return null;
	}
	return (
		<div className = "goodra" >
        	<img className= "evo" src= "/public/assets/images/goodra.png" />
        	<p>HURRAY. YOU DID IT!</p>
        	<p>If you want to see Goomy and Sliggo click the Button </p>
        </div>
		);
}

//Define the Goodra component. 
//Using ES6 we export our class like this. Just add export before the class.
export class Goodra extends React.Component {
	constructor(props){
		super(props);
		this.state =  {
			change: false,
			visibility: "hidden"
		}
	}

	showGoodra(){
		this.setState({change: true});
	}

	componentWillUpdate(){
		if(this.props.score === 102){
			this.showGoodra();
			this.changeButtonVisibility();
		}
	}

	showSibblings(){
		this.props.showAll();	
	}

	changeButtonVisibility(){
		this.setState({visibility: "visible"});//method to change css visibility on the button.
	}

    render() {
        return (
        	<div>
        		<ToggleGoodra show={this.state.change} />
        		<button  style={{visibility: this.state.visibility}} type="button" className="btn btn-outline-success" onClick={this.showSibblings.bind(this)}>Double click to show Goomy & Sliggoo</button>
        	</div>
        	   );
    }
}
