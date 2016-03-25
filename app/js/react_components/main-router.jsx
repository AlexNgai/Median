import React from 'react'
import { browserHistory, Router, Route } from 'react-router'

/*import MainLayout from 'layout/mainLayout'
import LandingLayout from 'layout/landingLayout'

import HomeScreen from 'screens/homeScreen.js'
import ChatScreen from 'screens/chatScreen.js'
import PatientScreen from 'screens/patientScreen.js'*/

var MainLayout = require('layout/mainLayout.jsx');
var LandingLayout = require('layout/landingLayout.jsx');

var HomeScreen = require('screens/homeScreen.jsx');
var ChatScreen = require('screens/chatScreen.jsx');
var PatientScreen = require('screens/patientScreen.jsx');

var MainRouter = React.createClass({

	render: function(){
		return (

			<Router className="router" history={browserHistory}>

                <Route component={LandingLayout}>
                    <Route path="/" 
                        component={HomeScreen}></Route>
                    <Route path="signup" 
                        component={HomeScreen}></Route>
                    <Route path="about" 
                        component={HomeScreen}></Route>
                </Route>

                <Route component={MainLayout}>
                 
                    <Route path="chat" 
                        component={ChatScreen}></Route>

                    <Route path="chat/:channelID" 
                        component={ChatScreen}></Route>

                    <Route path="patient/:patientID" 
                        component={PatientScreen}></Route>
               
                    <Route path="search" 
                        component={ChatScreen}></Route>

                </Route>
                
			</Router>	
		);
	}

});

module.exports = MainRouter;
