var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('layout/chatScreen.scss');

var ChatScreen = React.createClass({
    
	
    render: function(){
        return (
        <div>
        	<div className="channel-header">

        		<div className="channel-messages-header">

        			<div className="channel-title">
        				<h2 className="channel-name">#general</h2>

        				<div className="channel-info">
        					<span>1 member</span>
        					<span className="topic-divider">|</span>
        					<span>Description string</span>
        				</div>
        			</div>

        			<div className="channel-title-actions">

        			</div>
        		</div>
        	
        		<div className="flex-header">

        		</div>

        	</div>

        	<div className="channel-content">
        	chat screen
        	</div>

        </div>
    	);
    }
    
});

module.exports = ChatScreen;