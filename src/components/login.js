import React, { Component } from 'react';
import { connect } from 'react-redux';

import { firstScreen } from '../actions/index';

import { bindActionCreators } from 'redux';

class LoginComponent extends Component {

  getName() {

  }
  getPasswd() {

  }
  submit() {
    console.log("OK..let's go ");

  }
  render() {
    console.log("Login Me in visible: ", this.props.screen );
    console.log("Login screen state: ", this.props.state.screen );

    if (this.props.screen === 'Close Screen') {
        console.log("return to login screen...");
      //  this.setState({screen: 'Login Screen'});
    }

    if ((this.props.screen !== 'Login Screen') && (this.props.state.screen === 'Login Screen')) {
        console.log("Login Screen is off");
     return false;
   }

    return (
      <div>
        <div>Log me in, baby...!</div>
        <button onClick={()=> this.props.firstScreen("First Screen")} >Log In</button>
      </div>
    );
    
  }//end render
}//end component

function mapStateToProps(state) {
    console.log("Login - current state to map: ", state);
    //console.log("Component One - Map Dispatch current props: ", state.state.data );
    return {
        data: state.data,
        screen: state.screen
    };
}//end mapStateToProps


function mapDispatchToProps(dispatch) {
    return bindActionCreators({firstScreen}, dispatch )
}//end mapDispatchToProps
    
export default connect(mapStateToProps, mapDispatchToProps) (LoginComponent)

