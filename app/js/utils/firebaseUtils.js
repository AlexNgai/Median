var Firebase = require('firebase');

var isNewUser = true;

var Fire = new Firebase("https://amber-inferno-4829.firebaseio.com");

function FirebaseUtils(){}

FirebaseUtils.init = function(){
	
	Fire.offAuth(authDataCallback);

	Fire.onAuth(function(authData) {
		  
		if (authData) 
		{
			console.log("User " + authData.uid + " is logged in with " + authData.provider);
		} 
		else 
		{
			console.log("User is logged out");
		}

		if (authData && isNewUser) 
		{
			// save the user's profile into the database so we can list users,
			// use them in Security and Firebase Rules, and show profiles
			Fire.child("users").child(authData.uid).set({
				provider: authData.provider,
				name: getName(authData)
			});
		}
	});
}

FirebaseUtils.authWithGooglePopup = function()
{
	Fire.authWithOAuthPopup("google", authHandler);
}

FirebaseUtils.logout = function(){
	Fire.unauth();
}


module.exports = FirebaseUtils;



function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}


function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
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