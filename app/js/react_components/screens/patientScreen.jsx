var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('layout/patientScreen.scss');

var ChannelHeader = require('layout/channelHeader.jsx');
var ChannelFooter = require('layout/channelFooter.jsx');

var PatientTimeline = require('containers/patientTimeline.jsx');

var PatientScreen = React.createClass({
    
	getDefaultProps: function(){
        return {
            hasSideContent: false
        }
    },

    render: function(){
        return (
        <div className="screen-content">
        	<ChannelHeader />

            <div className="channel-content-container">
            	<div className="channel-primary-content patient-timeline-container">
                    <div className="channel-content md-scroll">
                	   
                        <PatientTimeline />
                    </div>

                    {/*FOOTER IS BOUND TO PRIMARY CONTENT*/}
                    {/*<ChannelFooter />*/}
                </div>

                {this.renderSideContent()}
            </div>

        </div>
    	);
    },

    renderSideContent: function(){
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

module.exports = PatientScreen;