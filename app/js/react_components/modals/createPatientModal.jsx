import React from 'react'

var CreatePatientModal = React.createClass({

	//close

	render: function(){

		//$('#modal1').openModal();

		return (
			<div id="create-patient-modal" className="modal">
			    <div className="modal-content">
			      	<h4>Modal Header</h4>
			      	<p>A bunch of text</p>
			    </div>
			    <div className="modal-footer">
			      	<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
			    </div>
			</div>
		);
	},

	componentDidMount: function(){

		$('#create-patient-modal').leanModal({
	      dismissible: false // Modal can be dismissed by clicking outside of the modal
	      
	    });
   

		$('#create-patient-modal').openModal();
	}
});

module.exports = CreatePatientModal;