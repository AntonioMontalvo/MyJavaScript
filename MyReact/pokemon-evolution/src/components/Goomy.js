//As usual we acknowledge our application's dependencies.
var React = require("react");
var ReactDOM = require("react-dom");



//This component will help hyde Goomy when the score is 74. 
function ToggleGoomy (props) {
	if(props.show){
		return null;
	}
	//This Component will get props from the render in Goomy. Depending on true or false it will render the image.
	return (
		<div className = "goomy" >
        	<img className= "evo" src= "/public/assets/images/Goomy.png" />
        	<p>Hi, I'm Goomy. I evolve with a score of 74. Once you've reached 74 you'll have to keep adding to see Sliggo.</p>
        </div>
		);
}

//Define the Goomy component. 
//Using ES6 we export our class like this. Just add export before the class.
export class Goomy extends React.Component {
	constructor(props){
		super(props);
		this.state =  {
			change: false
		}
	}

	handleChange(){
		this.setState({change: true});
	}

	componentWillUpdate(){//this lifecycle hook constantly monitor for the condition. When true it call handleChange.
		//props.score is passed from the Evolution
		if(this.props.score === 74){
			this.handleChange();
		}
	}

	componentWillReceiveProps(){
		//this lifecycle hook constantly monitor for the condition. When true the state of change is set to false.
		//props.sibblings is passed from the Evolution
		if(this.props.sibblings === true){
			this.setState({change: false});
		}
	}

    render() {
        return (
        		<div>
        			<ToggleGoomy show={this.state.change} />
        		</div>
        	   );
    }
}
