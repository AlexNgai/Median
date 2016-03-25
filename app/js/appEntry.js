var React = require('react');
var ReactDOM = require('react-dom');

//var $ = require('jquery');

var MainRouter = require('main-router.jsx');

window.onload = function() {

	console.log("Welcome to Median!");

	ReactDOM.render( <MainRouter />,
	    document.getElementById( 'app-container' )
	);

	//render side nav
	//render content panel

}