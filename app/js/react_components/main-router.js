var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var history = ReactRouter.hashHistory;
              //browserHistory
/*var MatchScreen = require('./react_screens/matchScreen.js');
var SettingsScreen = require('./react_screens/settingsScreen.js');*/
var HomeScreen = require('./screens/homeScreen.js');

var MainRouter = React.createClass({

	render: function(){
		return (

			<Router className="router" history={history}>
				<Route path="/" 
          component={HomeScreen}></Route>
				
        <Route path="/profile-builder" 
          component={HomeScreen}></Route>
			</Router>	
	
		);
	}

});

module.exports = MainRouter;
