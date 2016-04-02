import React from 'react'
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var FireUtils = require('utils/firebaseUtils.js');

var PatientFile = React.createClass({

	//close
	mixins: [LinkedStateMixin],

	//close
	getInitialState: function(){
		return {
			url: '',
			description: ''
		};
	},

	render: function(){

		//$('#modal1').openModal();

		return (
			<div id="patient-file-modal" className="modal">
			    <div className="modal-content">
			      	<h4>Add an Image</h4>
			      	<br/>

			      	<div className="input-field">
			      		{/*<label htmlFor="pn-heading">Heading</label>*/}
			      		<input id="pn-url" placeholder="Image URL" type="text" className="validate" valueLink={this.linkState('url')}/>
				    </div>

			      	<div className="input-field">
			      		{/*<label htmlFor="pn-heading">Heading</label>*/}
			      		<input id="pn-description" placeholder="Description" type="text" className="validate" valueLink={this.linkState('description')}/>
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

		if (this.state.url == null || this.state.url == ''){
			Materialize.toast('Enter a valid image URL', 4000);
			return;
		}

		var eventData = {
			type: 2,
			url: this.state.url,
			description: this.state.description,
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
		
		$('#patient-file-modal').openModal({
			complete: (this.props.closeModal) // Callback for Modal close
		});
	}
});

module.exports = PatientFile;