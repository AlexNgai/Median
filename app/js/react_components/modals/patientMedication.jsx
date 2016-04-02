import React from 'react'
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var FireUtils = require('utils/firebaseUtils.js');

var PatientMedication = React.createClass({

	mixins: [LinkedStateMixin],

	//close
	getInitialState: function(){
		return {
			heading: '',
			body: ''
		};
	},

	render: function(){

		//$('#modal1').openModal();

		//valueLink={this.linkState('message')

		return (
			<div id="patient-medication-modal" className="modal">
			    <div className="modal-content">
			      	<h4>Add a Medication Record</h4>
			      	<br/>
			      	
			      	<div className="input-field">
			      		{/*<label htmlFor="pn-heading">Heading</label>*/}
			      		<input id="pn-heading" placeholder="Title" type="text" className="validate" valueLink={this.linkState('heading')}/>
				    </div>

				    <div className="input-field">
			      		{/*<label htmlFor="pn-body">Note Body</label>*/}
				    	<input id="pn-body" placeholder="Message" type="text" className="validate" valueLink={this.linkState('body')}/>
				    </div>
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
			type: 5,
			title: this.state.heading,
			body: this.state.body,
			date: new Date().getTime(),
			user: {
				name: this.props.user.name,
				id: this.props.user.id
			}
		};

		FireUtils.addPatientTimelineEvent( this.props.patientID, eventData );
	},

	componentDidMount: function(){

		$('#patient-medication-modal').openModal({
			complete: (this.props.closeModal) // Callback for Modal close
		});
	}
});

module.exports = PatientMedication;