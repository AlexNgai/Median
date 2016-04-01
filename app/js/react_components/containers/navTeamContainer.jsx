import React from 'react'
import { browserHistory } from 'react-router'

var Avatar = require('general/avatarGen.jsx');

import { connect } from 'react-redux'

var TeamContainer = React.createClass({

	getDefaultProps: function(){
		return {
			team: {}, //in sorted order?
			currentChat: 0,
			openNewChat: null,
			changeChat: null
		}
	},

    render: function(){
        
        return (
        	<div className="mh-side-nav-channel-container">
        		<div className="mh-side-nav-header">
        			<h3>TEAM CHAT</h3>
        		</div>
        		{this.renderTeamChats()}
    		</div>
    	);
    },

    renderTeamChats: function(){
    	var rows = [];
    	for (var k=0; k<Math.min(Object.keys(this.props.team).length,4); k++){
    		var i = Object.keys(this.props.team)[k];
    		var member = this.props.team[i];
    		rows.push(<TeamListElement key={i} data={member} id={i} isActive={this.props.currentChat == member.id} />)
    	}

    	if (Object.keys(this.props.team).length > 4){

    		//OPENS UP MODAL WITH COMPLETE LIST OF PATIENTS
    		rows.push(<div key="more" className="nav-option-more">+{Object.keys(this.props.team).length-4} more</div>);
    	}

    	return rows;
    },

    componentDidMount: function(){
    	
 
    }


});

var TeamListElement = React.createClass({

	switchActiveTeamChat: function(){
		console.log("switching to team chat");
		browserHistory.push('/chat');
	},

	render: function(){

		var badge;
		if (this.props.data.notif > 0){
			badge = (<span className="mh-badge">{this.props.data.notif}</span>)
		}

		return (
			<div onClick={this.switchActiveTeamChat} className={"mh-side-nav-channel" + ((this.props.isActive)?" active":"")}>
				<Avatar size={35} name={this.props.data.name} circular={false} id={"nav-" + this.props.id} className="mh-side-nav-team-avatar"/>
				<span className="clickable team-name">
					<p>{this.props.data.name}</p>
					{this.renderStatusIcon(this.props.data.status)}
				</span>
				{badge}
			</div>
		);
	},

	renderStatusIcon: function( statusID ){
		switch(statusID){
			case 1: //online
				return (
					<p className="user-status">
						<i className="fa fa-circle status-online"></i> online
					</p>
					);
			case 2: //away
				return (
					<p className="user-status">
						<i className="fa fa-circle status-away"></i> away
					</p>
					);
			default: //offline (0)
				return (
					<p className="user-status">
						<i className="fa fa-circle-o status-offline"></i> offline
					</p>
					);
		}
	}
});

var mapStateToProps = function(state){
    return {team:state.team, user: state.user};
};

module.exports = connect(
  mapStateToProps
)(TeamContainer)

//module.exports = TeamContainer;

