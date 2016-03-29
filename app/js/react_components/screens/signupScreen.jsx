var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var FireUtils = require('utils/firebaseUtils.js');

import { connect } from 'react-redux'
import { user_setUserData } from 'actions/userActions.js'

var SignupScreen = React.createClass({
    
    render: function(){
        return <div>
        	<button onClick={this.login}>Login</button>
            <button onClick={this.logout}>Logout</button>
            <button onClick={this.setUser}>Set USer!1</button>

            <h1>{this.props.user.name}</h1>

        </div>
    },

    login: function(){
        FireUtils.authWithGooglePopup();
    },

    logout: function(){
        FireUtils.logout();
    },

    setUser: function(){
        this.props.setUser({name: "Allen"});
    }
    
});

var mapStateToProps = function(state){
    return {user:state.user};
};

var mapDispatchToProps = function(dispatch){
    return {
        setUser: function(userData){ dispatch(user_setUserData(userData)); }
    }
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen)