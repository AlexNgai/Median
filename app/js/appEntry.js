var React = require('react');
var ReactDOM = require('react-dom');

//var $ = require('jquery');

var MainRouter = require('main-router.jsx');

var FireUtils = require('utils/firebaseUtils.js');

window.onload = function() {

	console.log("Welcome to Median!");

	FireUtils.init();

	ReactDOM.render( <MainRouter />,
	    document.getElementById( 'app-container' )
	);

	//render side nav
	//render content panel

}