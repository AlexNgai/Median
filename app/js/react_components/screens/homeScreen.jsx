var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HomeScreen = React.createClass({
    
	
    render: function(){
        return <div className="welcome-content">
        	<div className="row">
	        	<div className="col s8 offset-s2">
	        		<h2 className="center-align">
	        			A messaging app for Narrative Medicine!
	        		</h2>
	        	</div>
        	</div>

        	<div className="row center-align">
        		<Link to="signup" data-word='Get Started!' className="start-button"></Link>
        	</div>
        </div>
    }
    
});

module.exports = HomeScreen;