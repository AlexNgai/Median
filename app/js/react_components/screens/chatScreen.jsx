var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('layout/chatScreen.scss');

var ChannelHeader = require('layout/channelHeader.jsx');
var ChannelFooter = require('layout/channelFooter.jsx');

var ChatMessages = require('containers/chatMessages.jsx');

var ChatScreen = React.createClass({
    
	getDefaultProps: function(){
        return {
            hasSideContent: true
        }
    },

    render: function(){
        return (
        <div className="screen-content">
        	<ChannelHeader channelID={this.props.routeParams.channelID}/>

            <div className="channel-content-container">
            	<div className="channel-primary-content">
                    <div className="channel-content md-scroll">
                	   
                        <ChatMessages channelID={this.props.routeParams.channelID}/>
                    </div>

                    {/*FOOTER IS BOUND TO PRIMARY CONTENT*/}
                    <ChannelFooter channelID={this.props.routeParams.channelID}/>
                </div>

                {this.renderSideContent()}
            );
            </div>

        </div>
    	);
    },

    renderSideContent: function(){
        //console.log("has side content?", this.props.hasSideContent);
        if (this.props.hasSideContent){
            return (
                <div className="channel-side-content md-scroll">
                    side content
                </div>
            );
        }
    },

    showToast: function(){
        Materialize.toast('I am a toast', 4000);
    },

    componentDidMount: function(){
        $('.modal-trigger').leanModal();
    }
    
});

module.exports = ChatScreen;