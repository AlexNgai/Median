import React from 'react'
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FireUtils = require('utils/firebaseUtils.js');

var PatientVitals = React.createClass({

	//close
	mixins: [LinkedStateMixin],

	//close
	getInitialState: function(){
		return {
			hr: null,
			bp1: null,
			bp2: null,
			ox: null,
			temp: null,
			resp: null
		};
	},

	render: function(){

		//$('#modal1').openModal();

		return (
			<div id="patient-vitals-modal" className="modal">
			    <div className="modal-content">
			      	<h4>Add Vital Signs Measurements</h4>
			      	<br/>

			      	<h6>Heart Rate</h6>
			      	<input placeholder="Heart Rate (bpm)" type="number" valueLink={this.linkState('hr')}/>

			      	<h6>Blood Pressure</h6>
			      	<input placeholder="Systolic (mmHg)" type="number" valueLink={this.linkState('bp1')}/>
			      	<input placeholder="Diastolic (mmHg)" type="number" valueLink={this.linkState('bp2')}/>

			      	<h6>Blood Oxygen</h6>
			      	<input placeholder="Oxygen Level (%)" type="number" valueLink={this.linkState('ox')}/>

			      	<h6>Temperature</h6>
			      	<input placeholder="Temperature (°F)" type="number" valueLink={this.linkState('temp')}/>

			      	<h6>Respiration Rate</h6>
			      	<input placeholder="Rate breath/min" type="number" valueLink={this.linkState('resp')}/>

			    </div>
			    <div className="modal-footer">
			      	<a onClick={this.submit} className="btn modal-action waves-effect waves-green">Submit</a>
			      	<a className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
			    </div>
			</div>
		);
	},

	submit: function(){
		console.log("submit");

		var eventData = {
			type: 3,
			hr: this.state.hr,
			bp1: this.state.bp1,
			bp2: this.state.bp2,
			ox: this.state.ox,
			temp: this.state.temp,
			resp: this.state.resp,
			date: new Date().getTime(),
			user: {
				name: this.props.user.name,
				id: this.props.user.id
			}
		};

		FireUtils.addPatientTimelineEvent( this.props.patientID, eventData );

		//this.props.closeModal();
	},

	componentDidMount: function(){
		
		$('#patient-vitals-modal').openModal({
			complete: (this.props.closeModal) // Callback for Modal close
		});
	}
});

module.exports = PatientVitals;