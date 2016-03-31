import React from 'react'
import {Link} from 'react-router'

require('layout/mainLayout.scss');

var Sidebar = require('layout/sidebar.jsx');

import { connect } from 'react-redux'
import { user_setCurrentScreen } from 'actions/userActions.js'

var MainLayout = React.createClass({

    getInitialState: function(){
        return {
            bannerActive: false
        };
    },

    render: function() {
        return (
        <div className="app">

            {this.renderBanner()}
          
            <Sidebar changeScreen={this.changeScreen} user={this.props.user}/>

            <main>
                {React.cloneElement(this.props.children, { changeScreen: this.changeScreen })}
                
            </main>
        </div>
        );
    },

    renderBanner: function(){
        if (this.state.bannerActive){
            return (
                <div id="banner">
                    Banner message This is a test banner message
                    <a className="banner-close"><i className="fa fa-times"></i></a>
                </div>
            );
        }
    },

    changeScreen: function( screenType, id ){
        console.log("Changing screen to ", screenType, id);
    },

    componentDidMount: function(){
        $(".button-collapse").sideNav();
        /*$('.notif-menu-icon').tooltip({delay: 50});*/

        $('.notifications-menu-btn').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
    }

});

var mapStateToProps = function(state){
    return {user: state.user};
};

var mapDispatchToProps = function(dispatch){
    return {
        changeScreen: function(screenType, id){ dispatch(user_setCurrentScreen(screenType, id)); }
    }
};

module.exports = connect(
    mapStateToProps,
  mapDispatchToProps
)(MainLayout)
