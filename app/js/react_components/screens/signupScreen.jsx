var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('layout/signupScreen.scss');

var FireUtils = require('utils/firebaseUtils.js');

import { connect } from 'react-redux'
import { user_setUserData } from 'actions/userActions.js'

var SignupScreen = React.createClass({
    
    getInitialState: function(){
        return {

        };
    },

    render: function(){
    
        var nonGoogle = false;

        var loginVal;
        if (this.props.user.id != null){
            loginVal = (
                <button className="waves-effect waves-light btn-large teal" onClick={this.logout}>Logout</button>
            );

        } else if (nonGoogle) {
            loginVal = (
                <div className="module form-module">
                  <div className="toggle"><i className="fa fa-times fa-pencil"></i>
                    <div className="tooltip">Create an Account</div>
                  </div>
                  <div className="form">
                    <h2>Login to your account</h2>
                    <form>
                      <input type="text" placeholder="Username"/>
                      <input type="password" placeholder="Password"/>
                      <button>Login</button>
                    </form>

                    <button className="google-button" onClick={this.loginGoogle}><i className="fa fa-google"></i>   Sign up with Google</button>

                  </div>
                  <div className="form">
                    <h2>Create an account</h2>
                    <form>
                      <input className="text" placeholder="Name" required/>
                      <input className="password" placeholder="Password"/>
                      <input className="email" placeholder="Email Address"/>
                      <button>Register</button>
                    </form>

                    <button className="google-button" onClick={this.loginGoogle}><i className="fa fa-google"></i>   Login with Google</button>

                  </div>
                </div>
            );
        } else {
            loginVal = (
                
                <div> 
                    <h3>Sign Up</h3>                 
                    <button className="google-button" onClick={this.loginGoogle}><i className="fa fa-google"></i>   Sign up with Google</button>
                </div>
            );
        }

        return <div className="signup-container">

            {loginVal}

        </div>
    },

    loginGoogle: function(){
        FireUtils.authWithGooglePopup();
    },

    logout: function(){
        FireUtils.logout();
    },

    setUser: function(){
        this.props.setUser({name: "Allen"});
    },

    signup: function(){

    },

    componentDidMount: function(){
        $('.toggle').click(function(){
        // Switches the Icon
        $(this).children('i').toggleClass('fa-pencil');
        // Switches the forms  
        $('.form').animate({
            height: "toggle",
            'padding-top': 'toggle',
            'padding-bottom': 'toggle',
            opacity: "toggle"
          }, "slow");
        });
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