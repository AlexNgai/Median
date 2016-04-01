import React from 'react'

var PatientVitals = React.createClass({

	//close

	render: function(){

		//$('#modal1').openModal();

		return (
			<div id="patient-vitals-modal" className="modal">
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
		
		$('#patient-vitals-modal').openModal({
			complete: (this.props.closeModal) // Callback for Modal close
		});
	}
});

module.exports = PatientVitals;