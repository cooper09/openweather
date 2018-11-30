import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeScreen } from '../actions/index';

import { bindActionCreators } from 'redux';

class CustomComponent extends React.Component {
   render() {

    console.log('Component Screen: ', this.props.screen );

    if (this.props.screen != 'First Screen') {
        console.log("Component Screen is off");
     return false;
   }
      return (
        <div className='center option animated fadeIn mainScrn'><br/><br/> 
        <button className="closeBtn" onClick={()=> this.props.closeScreen("Close Screen")}>X</button>
            Generic Component
        </div>
      )
   }//end render
}//end component


function mapStateToProps(state) {
    console.log("Component - current state to map: ", state);
    return {
        data: state.data,
        screen: state.screen
    };
}//end mapStateToProps


function mapDispatchToProps(dispatch) {
    return bindActionCreators({closeScreen}, dispatch )
}//end mapDispatchToProps
    
export default connect(mapStateToProps, mapDispatchToProps) (CustomComponent)
