var React = require('react');

var Avatar = require('general/avatarGen.jsx');

require('layout/patientTimeline.scss');

var TimeUtils = require('utils/timeUtils.js');

var scrollEvent;

var PatientNote = require('modals/patientNote.jsx');
var PatientFile = require('modals/patientFile.jsx');
var PatientVitals = require('modals/patientVitals.jsx');
var PatientDiagnosis = require('modals/patientDiagnosis.jsx');
var PatientMedication = require('modals/patientMedication.jsx');

import { connect } from 'react-redux'

var PatientTimeline = React.createClass({

	getDefaultProps: function(){
		return {
			userID: 1,
			timelineEvents: [
				{
					id: 1,
					body: "Lorem ipsum dolor sit amet, ut dolorem gloriatur pro, mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est, qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 23523,
					user: {
						name: "Jser 1",
						id: 1
					}
				},
				{
					id: 2,
					body: " qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 22523,
					user: {
						name: "fwefer 1",
						id: 2
					}
				}
			]
		}
	},

	getInitialState: function(){
		return {
			modal: 0
			//1 note 2 file 3 vitals 4 diagnosis 5 medication
		};
	},

    render: function(){

    	var modal;
    	if (this.state.modal) modal = this.renderModal();

        return (
        	<div>
	        	<section id="cd-timeline" className="cd-container">
	        		{this.renderTimelineEvents()}
	    		</section>

	    		<div className="event-btn-container">
	    			<AddEventButton activateModal={this.activateModal}/>
	    		</div>
	    		
	    		{modal}

    		</div>
    	);
    },

 	renderTimelineEvents: function(){

 		/*var timelineEvents = this.props.timelineEvents;
 		var rows = [];
		for (var i=0; i<timelineEvents.length; i++){
			rows.push (
				<TimelineEvent key={i} data={timelineEvents[i]}/>
			);
		}
		*/

    	var patientID = this.props.patientID;
    	var timeline = {};
        if (patientID != null){
            var patient = this.props.patients[patientID];
            if (patient !== null && patient !== undefined){
                timeline = patient.timeline;
            }
        }

		var rows = [];
		for (var tid in timeline){
			rows.push(this.renderEvent( tid, timeline[tid]));
			/*rows.push (
				<TimelineEvent key={tid} data={timeline[tid]}/>
			);*/
		}

		/*if (this.props.timeline == null || Object.keys(this.props.timeline).length == 0){
			rows.push(
				<div className="center-align no-timeline">Add a timeline event!</div>
			);
		}*/

		return rows;
	},

	renderEvent: function( id, data ){
		
		switch(data.type){
			case 1:
				return (<TimelineEvent key={id} data={data}/>);
			case 2:
				return (<TimelineFileEvent key={id} data={data}/>);
			case 3:
				return (<TimelineVitalSignsEvent key={id} data={data}/>);
			case 4:
				return (<TimelineDiagnosisEvent key={id} data={data}/>);
			case 5:
				return (<TimelineMedicationEvent key={id} data={data}/>);
			default:
				return;
		}
	},

	componentDidMount: function(){

		//start scrolled at the bottom
		$(".channel-content").prop({ scrollTop: $(".channel-content").prop("scrollHeight") });

		//console.log("add timeline animations");

		var $timeline_block = $('.cd-timeline-block');

		var animThresh = 0.9;

		//hide timeline blocks which are outside the viewport
		$timeline_block.each(function(){
			if($(this).offset().top > $(window).scrollTop()+$(window).height()*animThresh) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
			}
		});

		//on scolling, show/animate timeline blocks when enter the viewport
		scrollEvent = $('.channel-content').scroll( function(){
			$timeline_block.each(function(){
				if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*animThresh && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
					//console.log("uncovering hidden elem");
					$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
				}
			});
		});
	},

	componentDidUpdate: function(){
		$(".channel-content").prop({ scrollTop: $(".channel-content").prop("scrollHeight") });
	},

	componentWillUnmount: function(){
		//verify that this works
		scrollEvent.unbind();
	},

	activateModal: function( modalID ){
		this.setState({modal: modalID});
	},

	renderModal: function(){
		console.log("render modal", this.state.modal);

		switch( this.state.modal ){
			case 1: 
				return <PatientNote patientID={this.props.patientID} closeModal={this.closeModal} user={this.props.user}/>;
			case 2:
				return <PatientFile patientID={this.props.patientID} closeModal={this.closeModal} user={this.props.user}/>;
			case 3:
				return <PatientVitals patientID={this.props.patientID} closeModal={this.closeModal} user={this.props.user}/>;
			case 4:
				return <PatientDiagnosis patientID={this.props.patientID} closeModal={this.closeModal} user={this.props.user}/>;
			case 5:
				return <PatientMedication patientID={this.props.patientID} closeModal={this.closeModal} user={this.props.user}/>;

			default:
				return;
		}
	},

	closeModal: function(){
		console.log("modal closed");
		this.setState({modal: 0});
	}

});

var mapStateToProps = function(state){
    return {patients:state.patients, user: state.user};
};

module.exports = connect(
  mapStateToProps
)(PatientTimeline)


var AddEventButton = React.createClass({

	getInitialState: function(){
		return {
			isActive: false
		};
	},

	render: function(){
		return (
			
			<div className="mh-fab fixed-action-btn horizontal click-to-toggle">
			    <a className="btn-floating btn-large red">
			      	<i className="fa fa-plus"></i>
			    </a>
			    <ul>
			      	<li><a className="btn-large btn-floating blue darken-1 waves-effect waves-light tooltipped" onClick={this.addNote}
			      		data-position="bottom" data-delay="50" data-tooltip="Write a Note">
			      		<i className="fa fa-pencil"></i></a></li>
			      	<li><a className="btn-large btn-floating yellow darken-1 waves-effect waves-light tooltipped" onClick={this.addFile}
			      		ata-position="bottom" data-delay="50" data-tooltip="Upload a File">
			      		<i className="fa fa-file-image-o"></i></a></li>
			      	<li><a className="btn-large btn-floating green waves-effect waves-light tooltipped" onClick={this.addVitals}
			      		data-position="bottom" data-delay="50" data-tooltip="Add Vital Signs">
			      		<i className="fa fa-heartbeat"></i></a></li>
			      	<li><a className="btn-large btn-floating red waves-effect waves-light tooltipped" onClick={this.addDiagnosis}
			      		data-position="bottom" data-delay="50" data-tooltip="Add a Diagnosis">
			      		<i className="fa fa-stethoscope"></i></a></li>
			      	<li><a className="btn-large btn-floating orange waves-effect waves-light tooltipped" onClick={this.addMedication}
			      		data-position="bottom" data-delay="50" data-tooltip="Record Medication">
			      		<i className="fa fa-medkit"></i></a></li>
			    </ul>
			</div>
		);
	},

	componentDidMount: function(){
		
		$('.tooltipped').tooltip({delay: 50});
	},

	addNote: function(){
		console.log("adding note");
		this.props.activateModal(1);
	},

	addFile: function(){
		console.log("adding file");
		this.props.activateModal(2);
	},

	addVitals: function(){
		console.log("adding vitals");
		this.props.activateModal(3);
	},	

	addDiagnosis: function(){
		console.log("adding diagnosis");
		this.props.activateModal(4);
	},

	addMedication: function(){
		console.log("adding medication");
		this.props.activateModal(5);
	}

});

var TimelineEvent = React.createClass({

	render: function(){
		
		var heading;
		var body;
		if (this.props.data.title){
			heading = (<h2>{this.props.data.title}</h2>)
		}

		if (this.props.data.body){
			body = (<p>{this.props.data.body}</p>)
		}

		return (
			<div className="cd-timeline-block cssanimations">
		      	<div className="cd-timeline-img cd-picture bounce-in tl-note">
		        	<i className="fa fa-pencil"></i>
		        	{/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>*/}
		      	</div>

		      	<div className="cd-timeline-content">
			       	{heading}
			        {body}
			        <span className="cd-date">{TimeUtils.MDFormat(this.props.data.date)}</span>
		    	</div>
		    </div>
		);
	}

});

var TimelineFileEvent = React.createClass({

	render: function(){
		
		var img;
		var description;
		if (this.props.data.url){
			img = (
				<div className="tl-img-container">
					<img className="materialboxed" src={this.props.data.url} />
				</div>
			);
		}

		if (this.props.data.description){
			description = (<p>{this.props.data.description}</p>)
		}

		return (
			<div className="cd-timeline-block cssanimations">
		      	<div className="cd-timeline-img cd-picture bounce-in tl-file">
		        	<i className="fa fa-file-image-o"></i>
		        	{/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>*/}
		      	</div>

		      	<div className="cd-timeline-content">
			       	{img}
			        {description}
			        <span className="cd-date">{TimeUtils.MDFormat(this.props.data.date)}</span>
		    	</div>
		    </div>
		);
	},

	componentDidMount: function(){
		$('.materialboxed').materialbox();
	}

});

var TimelineVitalSignsEvent = React.createClass({

	render: function(){
		
		return (
			<div className="cd-timeline-block cssanimations">
		      	<div className="cd-timeline-img cd-picture bounce-in tl-vital">
		        	<i className="fa fa-heartbeat"></i>
		        	{/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>*/}
		      	</div>

		      	<div className="cd-timeline-content">
			       	<h2>Vital Signs</h2>

			        <div className="vital-signs-table">
			        	<div>
			        		<i className="fa fa-heart"></i> Heart Rate: <span className="right val">{this.props.data.hr} bpm</span>
			        	</div>
			        	<div>
			        		<i className="fa fa-tachometer"></i> Blood Pressure: <span className="right val">{this.props.data.bp1}/{this.props.data.bp2} mmHg</span>
			        	</div>
			        	<div>
			        		<i className="fa fa-leaf"></i> Blood Oxygen: <span className="right val">{this.props.data.ox}%</span>
			        	</div>
			        	<div>
			        		<i className="fa fa-fire"></i> Temperature: <span className="right val">{this.props.data.temp} °F</span>
			        	</div>
			        	<div>
			        		<i className="fa fa-bolt"></i> Respiration Rate: <span className="right val">{this.props.data.resp} /min</span>
			        	</div>
			        </div>

			        <span className="cd-date">{TimeUtils.MDFormat(this.props.data.date)}</span>
		    	</div>
		    </div>
		);
	},

	componentDidMount: function(){
		$('.materialboxed').materialbox();
	}

});

var TimelineDiagnosisEvent = React.createClass({

	render: function(){
		
		var heading;
		var body;
		if (this.props.data.title){
			heading = (<h2>{this.props.data.title}</h2>)
		}

		if (this.props.data.body){
			body = (<p>{this.props.data.body}</p>)
		}

		return (
			<div className="cd-timeline-block cssanimations">
		      	<div className="cd-timeline-img cd-picture bounce-in tl-diagnosis">
		        	<i className="fa fa-stethoscope"></i>
		        	{/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>*/}
		      	</div>

		      	<div className="cd-timeline-content">
			       	{heading}
			        {body}
			        <span className="cd-date">{TimeUtils.MDFormat(this.props.data.date)}</span>
		    	</div>
		    </div>
		);
	}

});

var TimelineMedicationEvent = React.createClass({

	render: function(){
		
		var heading;
		var body;
		if (this.props.data.title){
			heading = (<h2>{this.props.data.title}</h2>)
		}

		if (this.props.data.body){
			body = (<p>{this.props.data.body}</p>)
		}

		return (
			<div className="cd-timeline-block cssanimations">
		      	<div className="cd-timeline-img cd-picture bounce-in tl-medication">
		        	<i className="fa fa-medkit"></i>
		        	{/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>*/}
		      	</div>

		      	<div className="cd-timeline-content">
			       	{heading}
			        {body}
			        <span className="cd-date">{TimeUtils.MDFormat(this.props.data.date)}</span>
		    	</div>
		    </div>
		);
	}

});