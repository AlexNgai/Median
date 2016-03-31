/*var React = require('react');
var ReactDOM = require('react-dom');

//var $ = require('jquery');

var MainRouter = require('main-router.jsx');

var FireUtils = require('utils/firebaseUtils.js');

var MainStore = require('stores/mainStore.js');

console.log("STORE:", MainStore.getState());*/


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import FireUtils from 'utils/firebaseUtils'

import MainRouter from 'main-router'

import MainStore from 'stores/mainStore'

window.onload = function(){
	
	console.log("Welcome to Median!");
	console.log("INITIAL STORE:", MainStore.getState());

	FireUtils.init();

	//MainStore.dispatch(user_setUserData({name:'test',age:13}));
	/*FireUtils.writeChatMessage("general", {
					id: 1,
					body: "Lorem ipsum dolor sit amet, ut dolorem gloriatur pro, mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est, qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 23523,
					user: {
						name: "Jser 1",
						id: 1
					}
				});*/

	render(
	  <Provider store={MainStore}>
	    <MainRouter />
	  </Provider>,
	  document.getElementById('app-container')
	)
}

/*window.onload = function() {

	console.log("Welcome to Median!");

	FireUtils.init();

	ReactDOM.render( <MainRouter />,
	    document.getElementById( 'app-container' )
	);

	render(
	  <Provider store={store}>
	    <App />
	  </Provider>,
	  document.getElementById('root')
	)

	//render side nav
	//render content panel

}*/