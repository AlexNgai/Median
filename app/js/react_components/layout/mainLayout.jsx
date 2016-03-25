import React from 'react'
import {Link} from 'react-router'

require('layout/mainLayout.scss');

var Sidebar = require('layout/sidebar.jsx');

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
          
            <Sidebar />

            <main>
                {this.props.children}
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

module.exports = MainLayout;