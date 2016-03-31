import React from 'react'
import { browserHistory } from 'react-router'

var FireUtils = require('utils/firebaseUtils.js');

import { connect } from 'react-redux'
import { user_setCurrentScreen } from 'actions/userActions.js'

var PatientContainer = React.createClass({

	getDefaultProps: function(){
		return {
			channels: [
				{
					name: "general",
					notif: 33,
					id: 1
				},
				{
					name: "random",
					notif: 0,
					id: 2
				},
				{
					name: "urgent",
					notif: 1,
					id: 3
				},
				{
					name: "test1",
					notif: 0,
					id: 4
				},
				{
					name: "test2",
					notif: 1,
					id: 5
				},

			], //in sorted order?
			currentChannel: 0,
			createNewChannel: null,
			changeChannel: null
		}
	},

    render: function(){
        
        return (
        	<div className="mh-side-nav-channel-container">
        		<div className="mh-side-nav-header">
        			<h3>PATIENT</h3>
        			<i className="fa fa-plus clickable mh-side-nav-add-btn"></i>
        		</div>
        		{this.renderChannels()}
    		</div>
    	);
    },

    renderChannels: function(){
    	var rows = [];
    	for (var i=0; i<Math.min(this.props.channels.length,4); i++){
    		var channel = this.props.channels[i];
    		
    		var isActive = (this.props.usernotif.currentActive.id == channel.id && this.props.usernotif.currentActive.screenType == "P");

    		rows.push(<PatientListElement key={channel.id} data={channel} isActive={isActive} changeScreen={this.props.changeScreen}/>)
    	}

    	if (this.props.channels.length > 4){

    		//OPENS UP MODAL WITH COMPLETE LIST OF PATIENTS
    		rows.push(<div key="more" className="nav-option-more">+{this.props.channels.length-4} more</div>);
    	}

    	return rows;
    },

    componentDidMount: function(){
    	
    }


});

var PatientListElement = React.createClass({

	switchActivePatient: function(){
		console.log("switching to patient");
		this.props.changeScreen("P", this.props.data.id);
		browserHistory.push('/patient/' + this.props.data.id);
	},

	render: function(){

		var badge;
		if (this.props.data.notif > 0){
			badge = (<span className="mh-badge">{this.props.data.notif}</span>)
		}

		return (
			<div onClick={this.switchActivePatient} className={"mh-side-nav-channel" + ((this.props.isActive)?" active":"")}>
				<span className="clickable channel-name">{this.props.data.name}</span>
				{badge}
			</div>
		);
	}
});

var mapStateToProps = function(state){
    return {channels2:state.patients, usernotif: state.user};
};

var mapDispatchToProps = function(dispatch){
    return {
        changeScreen: function(screenType, id){ dispatch(user_setCurrentScreen(screenType, id)); }
    }
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientContainer)
