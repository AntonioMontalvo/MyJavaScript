//As usual we acknowledge our application's dependencies.
var React = require("react");
var ReactDOM = require("react-dom");

//Access the following Componets; Goomy, Sliggoo, Goodra, Add2,Add3, Add7, Score and Reset.
import {Goomy} from './Goomy';
import {Sliggoo} from './Sliggoo';
import {Goodra} from './Goodra';
import {Add2} from './Add2';
import {Add3} from './Add3';
import {Add7} from './Add7';
import {Score} from './Score';
import {Reset} from './Reset';


//Define the Evolution component. All other components will ultimately be funneled into this "Parent" Component.
//Using ES6 we export our class like this. Just add export before the class.
export default class Evolution extends React.Component {
	//initialize properties and bind methods.
	constructor (props){
		super(props);
		this.state = {
			score : 0,
			change: false,
			sibblings: false
		},
		// We need to bind this in the methods below.
		this.addPoints = this.addPoints.bind(this);
		this.showAll = this.showAll.bind(this);
		this.reset = this.reset.bind(this);
	}

	//method to add points
	addPoints (points){
		this.setState({score: this.state.score + points});
	}

	//method to show All pokemon
	showAll(){
		this.setState({sibblings: true});
	}
	//method to reset the score
	reset(){
		this.setState({score: 0});
	}

	//this is what the Evolution class will render. Using Bootstrap.
    render() {
        return (
	        <div className="container">
	        	{/*Header*/}
	        	<div className="row">
	        		
		        	<div className = "col-md-12">
		        		<h1>Pokemon Evolution</h1>
		        		<img src="/public/assets/images/intro.png" />
		        	</div>

		        </div>	
		        {/*Evolution*/}
		        <div className="row">		
		        	<div className = "col-md-4" >
		        	{/*this.state.score & this.state.sibblings will pass this states as props to the other Components*/}
		        		<Goomy score={this.state.score} sibblings={this.state.sibblings} /> 
		        	</div>
		        	<div className = "col-md-4" >
		        		<Sliggoo score={this.state.score} sibblings={this.state.sibblings} />
		        	</div>
		        	<div className = "col-md-4" >
		        	{/*this.showAll will pass the method as props to the Component*/}
		        		<Goodra score={this.state.score} showAll={this.showAll} /> 
		        	</div>		
		        </div>
		        {/*Score*/}
		    	<div className="row">
		    		<div className = "col-md-4" ></div>
		        	<div className = "col-md-4" >
		        		<Score points={this.state.score}  />
		        	</div>
		        	<div className = "col-md-4" ></div>
		        </div>
		        {/*Add Points Buttons*/}
		        <div className="row">
		        	<div className = "col-md-5" ></div>
		        	<div className = "col-md-1" >
		        	{/*this.addPoints will pass the method as props to the Component*/}
		        		<Add2 addPoints={this.addPoints} /> 
		        	</div>
		        	<div className = "col-md-1" >
		        		<Add3 addPoints={this.addPoints} />
		        	</div>
		        	<div className = "col-md-1" >
		        		<Add7 addPoints={this.addPoints} />
		        	</div>
		        </div>
		    	{/*Reset Score*/}
		        <div className="row">
		        <div className="col-md-3"></div>
		        	<div className="col-md-5">
		        {/*this.reset will pass the method as props to the Component*/}
		        		<Reset reset={this.reset} />
		        	</div>
		        </div>
		    
	        </div>
        	   );
    }
}