var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

//var global = require('./global.js');
//var default = require('./default.js');

//var Routes = require('./routes');

var HomeContainer = require('./react_components/containers/homeContainer.js');

//ReactDOM.render(MainPage, document.getElementById('main-app-container'));

$( document ).ready(function() {

	console.log("home page test 2");


	ReactDOM.render( <HomeContainer />,
	    document.getElementById( 'comp-container' )
	);
});
