var Firebase = require('firebase');

var isNewUser = true;

var Fire = new Firebase("https://amber-inferno-4829.firebaseio.com");

import { user_setUserData, user_logout } from 'actions/userActions.js'
import { channel_setChannelData } from 'actions/channelActions.js'
import { team_setData } from 'actions/teamActions.js'

import MainStore from 'stores/mainStore'

function FirebaseUtils(){}

FirebaseUtils.init = function(){
	
	Fire.offAuth(authDataCallback);

	Fire.onAuth(function(authData) {
		  
		if (authData) 
		{
			console.log("User " + authData.uid + " is logged in with " + authData.provider, authData);
			
			FirebaseUtils.initAfterLogin();
		} 
		else 
		{
			console.log("User is logged out");
		}

		if (authData) 
		{
			// save the user's profile into the database so we can list users,
			// use them in Security and Firebase Rules, and show profiles
			/*Fire.child("users").child(authData.uid).set({
				provider: authData.provider,
				name: getName(authData)
			});*/

				/*name: null,
        		id: null,
        		profileImg: null*/
        	MainStore.dispatch(user_setUserData(
        		{
        			name: getName(authData),
        			id: authData.uid,
        			profileImg: getProfileImg(authData)
        		}
        	));


        	//Fire.child("users").child(authData.uid);
		}
	});
}

FirebaseUtils.authWithGooglePopup = function()
{
	Fire.authWithOAuthPopup("google", authHandler);
}

FirebaseUtils.authWithFormInputs = function()
{
	console.log("auth with form inputs");
}

FirebaseUtils.logout = function(){
	
	Fire.unauth();
	MainStore.dispatch(user_logout());
}




function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider, authData);
  } else {
    console.log("User is logged out");
  }

  MainStore.dispatch(user_logout());
}


function authHandler(error, authData) {
	if (error) {
		console.log("Signup Failed!", error);
	} else {
		console.log("Authenticated successfully with payload:", authData);
		
		Fire.child("users").child(authData.uid).set({
			provider: authData.provider,
			name: getName(authData)
		});
	}
}

// find a suitable name based on the meta info given by each provider
function getName(authData) {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
     case 'google':
       return authData.google.displayName;
  }
}

function getProfileImg(authData) {
	switch(authData.provider) {
	    case 'password':
	       return null;
	    case 'google':
	       return authData.google.profileImageURL;
	    default:
	    	return null;
	}
}


//GET STORES (all of them for now)
FirebaseUtils.getChannelInfo = function()
{
	var ref = new Firebase("https://amber-inferno-4829.firebaseio.com/channels");
	// Attach an asynchronous callback to read the data at our posts reference
	ref.on("value", function(snapshot) {
	  console.log(snapshot.val());
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
}

FirebaseUtils.initAfterLogin = function(){
		
	//console.log("postlogin init");

	var channelRef = new Firebase("https://amber-inferno-4829.firebaseio.com/channels");
	// Attach an asynchronous callback to read the data at our posts reference
	
	//Load channel data
	channelRef.on("value", function(snapshot) {
		var channelData = snapshot.val();
		//console.log("channels", channelData);

		MainStore.dispatch(channel_setChannelData( channelData ));

	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});

	//Load team information
	var userRef = new Firebase("https://amber-inferno-4829.firebaseio.com/users");
	userRef.on("value", function(snapshot) {
		var userData = snapshot.val();
		//console.log("users", userData);
		MainStore.dispatch(team_setData( userData ));

	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});


}


FirebaseUtils.writeChatMessage = function( channelID, messageData ){

	var messageRef = new Firebase("https://amber-inferno-4829.firebaseio.com/channels/" + channelID + "/messages");
	var newPostRef = messageRef.push();
	newPostRef.set( messageData );

}

FirebaseUtils.receiveChatMessage = function(){

}



module.exports = FirebaseUtils;