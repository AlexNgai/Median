var React = require('react');

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
			currentChannel: 2,
			createNewChannel: null,
			changeChannel: null
		}
	},

    render: function(){
        
        return (
        	<div className="mh-side-nav-channel-container">
        		<div className="mh-side-nav-header">
        			<h3>CHANNEL</h3>
        			<i className="fa fa-plus-circle clickable mh-side-nav-add-btn"></i>
        		</div>
        		{this.renderChannels()}
    		</div>
    	);
    },

    renderChannels: function(){
    	var rows = [];
    	for (var i=0; i<this.props.channels.length; i++){
    		var channel = this.props.channels[i];
    		rows.push(<ChannelListElement key={channel.id} data={channel} isActive={this.props.currentChannel == channel.id} />)
    	}

    	return rows;
    },

    componentDidMount: function(){
    	
 
    }


});

var ChannelListElement = React.createClass({

	render: function(){

		var badge;
		if (this.props.data.notif > 0){
			badge = (<span className="mh-badge">{this.props.data.notif}</span>)
		}

		return (
			<div className={"mh-side-nav-channel" + ((this.props.isActive)?" active":"")}>
				<span className="clickable channel-name">#{this.props.data.name}</span>
				{badge}
			</div>
		);
	}
});


module.exports = ChannelContainer;

