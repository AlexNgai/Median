import React from 'react'
import { hashHistory, Router, Route } from 'react-router'

import MainLayout from 'layout/mainLayout'
import LandingLayout from 'layout/landingLayout'

import HomeScreen from 'screens/homeScreen.js'
import ChatScreen from 'screens/chatScreen.js'
import PatientScreen from 'screens/patientScreen.js'

var MainRouter = React.createClass({

	render: function(){
		return (

			<Router className="router" history={hashHistory}>
				
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
