var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('layout/patientScreen.scss');

var ChannelHeader = require('layout/channelHeader.jsx');
var ChannelFooter = require('layout/channelFooter.jsx');

var PatientTimeline = require('containers/patientTimeline.jsx');

import { connect } from 'react-redux'

var PatientScreen = React.createClass({
    
	getDefaultProps: function(){
        return {
            hasSideContent: false
        }
    },

    render: function(){
        
        var patientID = this.props.routeParams.patientID;

        var name;
        var members;
        var description;

        if (patientID != null){
            var channel = this.props.patients[patientID];
            if (channel !== null && channel !== undefined){
                name = channel.name;
                members = 1;
            }
        }

        return (
        <div className="screen-content">
        	<ChannelHeader channelID={patientID} channelName={name} members={members} channelDescription={description}/>

            <div className="channel-content-container">
            	<div className="channel-primary-content patient-timeline-container">
                    <div className="channel-content md-scroll">
                	   
                        <PatientTimeline patientID={this.props.routeParams.patientID}/>
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

var mapStateToProps = function(state){
    return {patients:state.patients, user: state.user};
};

module.exports = connect(
  mapStateToProps
)(PatientScreen)