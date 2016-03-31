import React from 'react'
import { browserHistory } from 'react-router'

var FireUtils = require('utils/firebaseUtils.js');

import { connect } from 'react-redux'
import { user_setCurrentScreen } from 'actions/userActions.js'

var ChannelContainer = React.createClass({

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

			], //in sorted order?
			currentChannel: 0,
			createNewChannel: null,
			changeChannel: null
		}
	},

    render: function(){
        
console.log("rerendering channel nav", this.props);

        return (
        	<div className="mh-side-nav-channel-container">
        		<div className="mh-side-nav-header">
        			<h3>CHANNEL</h3>
        			<i className="fa fa-plus clickable mh-side-nav-add-btn"></i>
        		</div>
        		{this.renderChannels()}
    		</div>
    	);
    },

    renderChannels: function(){
    	var rows = [];
    	console.log("channels", this.props.channels);
    	for (var channelKey in this.props.channels){
    		var channel = this.props.channels[channelKey];
    		
    		var isActive = (this.props.usernotif.currentActive.id == channel.name && this.props.usernotif.currentActive.screenType == "C");

    		rows.push(<ChannelListElement key={channel.name} data={channel} 
    			isActive={this.props.usernotif.currentActive.id == channel.name} changeScreen={this.props.changeScreen}/>)
    	}

    	if (Object.keys(this.props.channels).length > 4){

    		//OPENS UP MODAL WITH COMPLETE LIST OF PATIENTS
    		rows.push(<div key="more" className="nav-option-more">+{Object.keys(this.props.channels).length-4} more</div>);
    	}

    	return rows;
    },

    componentDidMount: function(){
	    //change current channel?
    }


});

var ChannelListElement = React.createClass({

	switchActiveChannel: function(){
		console.log("switching to channel");
		this.props.changeScreen("C", this.props.data.name);
		browserHistory.push('/chat/' + this.props.data.name);
	},

	render: function(){

		var badge;
		if (this.props.data.notif > 0){
			badge = (<span className="mh-badge">{this.props.data.notif}</span>)
		}

		return (
			<div onClick={this.switchActiveChannel} className={"mh-side-nav-channel" + ((this.props.isActive)?" active":"")}>
				<span className="clickable channel-name">#{this.props.data.name}</span>
				{badge}
			</div>
		);
	}
});

var mapStateToProps = function(state){
    return {channels:state.channels, usernotif: state.user};
};

var mapDispatchToProps = function(dispatch){
    return {
        changeScreen: function(screenType, id){ dispatch(user_setCurrentScreen(screenType, id)); }
    }
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelContainer)


