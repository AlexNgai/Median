var React = require('react');

var Avatar = require('general/avatarGen.jsx');

var TeamContainer = React.createClass({

	getDefaultProps: function(){
		return {
			team: [
				{
					name: "Jser 1",
					notif: 3,
					id: 1,
					status: 1
				},
				{
					name: "Xser 2",
					notif: 0,
					id: 2,
					status: 0
				},
				{
					name: "Gser 3",
					notif: 1,
					id: 3,
					status: 1
				},
				{
					name: "Bser 4",
					notif: 0,
					id: 4,
					status: 2
				},
				{
					name: "XCser 4",
					notif: 0,
					id: 5,
					status: 0
				},
				{
					name: "Bser 4",
					notif: 0,
					id: 6,
					status: 2
				}

			], //in sorted order?
			currentChat: 2,
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
    	for (var i=0; i<Math.min(this.props.team.length,4); i++){
    		var member = this.props.team[i];
    		rows.push(<TeamListElement key={member.id} data={member} isActive={this.props.currentChat == member.id} />)
    	}

    	if (this.props.team.length > 4){

    		//OPENS UP MODAL WITH COMPLETE LIST OF PATIENTS
    		rows.push(<div key="more" className="nav-option-more">+{this.props.team.length-4} more</div>);
    	}

    	return rows;
    },

    componentDidMount: function(){
    	
 
    }


});

var TeamListElement = React.createClass({

	render: function(){

		var badge;
		if (this.props.data.notif > 0){
			badge = (<span className="mh-badge">{this.props.data.notif}</span>)
		}

		return (
			<div className={"mh-side-nav-channel" + ((this.props.isActive)?" active":"")}>
				<Avatar size={35} name={this.props.data.name} circular={false} id={"nav-" + this.props.data.id} className="mh-side-nav-team-avatar"/>
				<span className="clickable team-name">
					<p>@{this.props.data.name}</p>
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


module.exports = TeamContainer;

