import React from 'react'

var FireUtils = require('utils/firebaseUtils.js');

var PatientNote = React.createClass({

	//close

	render: function(){

		//$('#modal1').openModal();

		return (
			<div id="patient-note-modal" className="modal">
			    <div className="modal-content">
			      	<h4>Add a Note</h4>
			      	<p>A bunch of text</p>
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
			type: 1,
			body: "Lorem ipsum dolor sit amet, ut dolorem gloriatur pro, mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est, qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
			date: new Date().getTime(),
			user: {
				name: "Jser 1",
				id: 1
			}
		};

		FireUtils.addPatientTimelineEvent( this.props.patientID, eventData );
	},

	componentDidMount: function(){

		$('#patient-note-modal').openModal({
			complete: (this.props.closeModal) // Callback for Modal close
		});
	}
});

module.exports = PatientNote;