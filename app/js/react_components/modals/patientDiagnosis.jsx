import React from 'react'

var PatientDiagnosis = React.createClass({

	//close

	render: function(){

		//$('#modal1').openModal();

		return (
			<div id="patient-diagnosis-modal" className="modal">
			    <div className="modal-content">
			      	<h4>Modal Header</h4>
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
	},

	componentDidMount: function(){
		
		$('#patient-diagnosis-modal').openModal({
			complete: (this.props.closeModal) // Callback for Modal close
		});
	}
});

module.exports = PatientDiagnosis;