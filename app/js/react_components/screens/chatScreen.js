var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('layout/chatScreen.scss');

var ChannelHeader = require('layout/channelHeader.js');
var ChannelFooter = require('layout/channelFooter.js');

var ChatScreen = React.createClass({
    
	
    render: function(){
        return (
        <div className="screen-content">
        	<ChannelHeader />

        	<div className="channel-content">
        	chat screen

                <a className="btn" onClick={this.showToast}>Toast!</a>

        	</div>

            <ChannelFooter />

        </div>
    	);
    },

    showToast: function(){
        Materialize.toast('I am a toast', 4000);
    }
    
});

module.exports = ChatScreen;