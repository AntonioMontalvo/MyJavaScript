//As usual we acknowledge our application's dependencies.
var React = require("react");
var ReactDOM = require("react-dom");


//This component will help hyde Goomy when the score is 74. 
function ToggleSligoo (props) {
	if(!props.show){
		return null;
	}
	return (
		<div className = "sliggoo" >
        	<img className= "evo" src= "/public/assets/images/sliggoo.png" />
        	<p>Hi my name is Sliggoo. I used to be Goomy. I will evolve into Goodra with a score of 102. Once you've reached 102 you'll have to keep adding to see Goodra.</p>
        </div>
		);
}

//Define the Sliggoo component. 
//Using ES6 we export our class like this. Just add export before the class.
export class Sliggoo extends React.Component {
	constructor(props){
		super(props);
		this.state =  {
			change: false
		}
	}

	showSliggoo(){
		this.setState({change: true});
	}

	hideSliggoo(){
		this.setState({change: false});
	}

	componentWillUpdate(){
		if(this.props.score === 74 ){
			this.showSliggoo();
		}
		if(this.props.score === 102 ){
			this.hideSliggoo();
		}	
	}

	componentWillReceiveProps(){
		if(this.props.sibblings === true){
			this.showSliggoo();
		}
	}

    render() {
        return (
        	<div>
        		<ToggleSligoo show={this.state.change} />
        	</div>
        	   );
    }
}


