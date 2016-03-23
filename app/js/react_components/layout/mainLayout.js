import React from 'react'
import {Link} from 'react-router'

require('layout/mainLayout.scss');

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
          
            <header className="primary-header">

                <ul id="slide-out" className={"side-nav fixed mh-side-nav" + ((this.state.bannerActive)?" banner-active":"")}>
                    
                    <div className="logo">
                        <img src="/img/median-logo_w_sm.png"/>

                        <a className="notifications-menu-btn" data-activates='notif-menu-dropdown' href="#/chat">
                            <i className="fa fa-bell-o has-notif notif-menu-icon" data-position="bottom" data-delay="50" data-tooltip="Notifications">
                                <span className="notif-badge">5</span>
                            </i>

                            {/*<div className="notif-container">
                                                            <div className="notif-dropdown">
                                                                dropdown content content
                                                            </div>
                                                        </div>
                            
                                                        <ul id='notif-menu-dropdown' className='dropdown-content'>
                                                            <li><a href="#!">one</a></li>
                                                            <li><a href="#!">two</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#!">three</a></li>
                                                        </ul>*/}
                        </a>
                    </div>


                    <li><a href="#!">First Sidebar Link</a></li>
                    <li><a href="#!">Second Sidebar Link</a></li>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/chat" activeClassName="active">Chat</Link></li>
                    <li><Link to="/patient" activeClassName="active">Patient</Link></li>

                    <div>Hello world</div>

                    <div className="mh-side-nav-footer">
                        User
                    </div>
                </ul>
                
                {/*<a href="#" data-activates="slide-out" className="button-collapse hide-on-large-only"><i className="fa fa-bars"></i> Menu</a>*/}
   
            </header>

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
    $('.notif-menu-icon').tooltip({delay: 50});

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