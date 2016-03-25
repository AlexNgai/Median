var React = require('react');

var Firebase = require('firebase');

var isNewUser = true;

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

// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://amber-inferno-4829.firebaseio.com");
//ref.onAuth(authDataCallback);
ref.offAuth(authDataCallback);

ref.onAuth(function(authData) {
  
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }

  if (authData && isNewUser) {
    // save the user's profile into the database so we can list users,
    // use them in Security and Firebase Rules, and show profiles
    ref.child("users").child(authData.uid).set({
      provider: authData.provider,
      name: getName(authData)
    });
  }
});
// find a suitable name based on the meta info given by each provider
function getName(authData) {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
     case 'google':
       return authData.google.displayName;
  }
}

var TestContainer = React.createClass({
    render: function(){
        return <div>
            
            test container

            <button onClick={this.login}>Login</button>

            <button onClick={this.logout}>Logout</button>
        </div>
    },

    login: function(){

        ref.authWithOAuthPopup("google", authHandler);
    },

    logout: function(){
        ref.unauth();
    }
    //renderContent: function(){
    //    if(this.props.children){
    //        return this.props.children;
    //    }else{
    //        return <ProfileBuilder />
    //    }
    //}
});

module.exports = TestContainer;