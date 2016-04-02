var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var AboutScreen = React.createClass({
    
	
    render: function(){
        return <div className="about-content">
        	<div className="row">
	        	<div className="col s12">
	        		
	        		<div className="card teal">
		        		{/*<h2>About Us</h2>
		        					        	
		        				        		<p>
		        				        			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		        				        		</p>*/}

		        		<div className="card-image">
			              <img className="responsive-img" src="/img/beach.jpg"/>
			            </div>

			            <div className="card-content">
			            	<h2>About Us</h2>
			              	<p>
			              		We're a team in Southern California bringing you the newest of Medical Workflow technologies.
			              	</p>
			            </div>

	        		</div>
	        	</div>
        	</div>
        </div>
    }
    
});

module.exports = AboutScreen;

