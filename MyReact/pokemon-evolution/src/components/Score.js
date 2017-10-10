//As usual we acknowledge our application's dependencies.
var React = require("react");
var ReactDOM = require("react-dom");

//Define the Add7 component. 
//Using ES6 we export our class like this. Just add export before the class.
export class Score extends React.Component {
    render() {
        return (<div className = "score" >
        			<h3>Total Score = {this.props.points}</h3>
        	   </div>
        	   );
    }
}
//this Component shows the total score, that is it.