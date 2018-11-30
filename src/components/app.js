import React, { Component } from 'react';

import  LoginComponent  from './login.js';
import  CustomComponent  from './component-template.js';
XPathResult

export default class App extends Component {
  render() {
  console.log("App - state: ", this.props.state );

    var currentState = this.props.store.getState();
    console.log("Current State: ", currentState.mydata );
    console.log("Current State screen: ", currentState.screen );
    return (
      <div className='center option animated fadeIn'><br/><br/>
        <div>React simple starter</div>
        Current State: {this.props.state.screen}
        <br/><br/>
        <LoginComponent onLogin={ event =>{
          console.log('onLogin')
        }} onRegister={ data =>{
          console.log("onRegister")
        }} visible={this.props.state.screen} state={this.props.state} />

        <CustomComponent state={this.props.state}/>
      </div>
    );
  }
}
