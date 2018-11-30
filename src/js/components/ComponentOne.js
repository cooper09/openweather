var React = require('react');

var ComponentOne = React.createClass({

	doSomething: function (){
		console.log("Do Something!!!");
	},
	render: function() {
	/*	 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false; 
	} */

	console.log("Component One props: ", this.props );
		
		return (
			<div>
				<h1></h1>
				<button className="btn" onClick={handleClick.bind(this)}>Where you are.</button>
				<br/><br/>
				<button className="btn" onClick={handleClick.bind(this)}>Where you want to be.</button>
			</div>
			);

			function handleClick (num, arr, id){
				//cooper s - use jquery to open/close each items content....
				console.log("nandleClick: ");
			}//end handleItemClick

	}//end render
});//end ComponentOne

module.exports = ComponentOne;