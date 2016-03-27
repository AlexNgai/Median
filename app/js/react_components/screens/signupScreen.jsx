var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var FireUtils = require('utils/firebaseUtils.js');

var SignupScreen = React.createClass({
    
    render: function(){
        return <div>
        	<button onClick={this.login}>Login</button>
            <button onClick={this.logout}>Logout</button>
        </div>
    },

    login: function(){
        FireUtils.authWithGooglePopup();
    },

    logout: function(){
        FireUtils.logout();
    }
    
});

module.exports = SignupScreen;