var React = require('react');
import {Link} from 'react-router'

require('layout/sidebar.scss');

var ChannelContainer = require('containers/navChannelContainer.jsx');
var PatientContainer = require('containers/navPatientContainer.jsx');
var TeamContainer = require('containers/navTeamContainer.jsx');

var Avatar = require('general/avatarGen.jsx');

var Sidebar = React.createClass({
	
    getInitialState: function(){
        return {
            bannerActive: false
        };
    },

    render: function(){
        return (

        	<header className="primary-header">

                <div id="slide-out" className={"side-nav fixed mh-side-nav" + ((this.state.bannerActive)?" banner-active":"")}>
                    
                    <div className="mh-logo">
                        {/*<img className="mh-logo-img" src="/img/median-logo_w_sm.png"/>*/}
                        {/*<Link to="/" activeClassName="active"><img className="mh-logo-img" src="/img/median-logo_w_sm.png"/></Link>*/}

                        <div>
                        <Link to="/" activeClassName="active" className="nav-home-link"><img className="mh-logo-img" src="/img/median-logo_w_sm.png"/></Link>
                        </div>

                        <a className="notifications-menu-btn" data-activates='notif-menu-dropdown' href="#/chat">
                            <i className="fa fa-bell-o has-notif notif-menu-icon" data-position="bottom" data-delay="50" data-tooltip="Notifications">
                                <span className="notif-badge">5</span>
                            </i>

                        </a>
                    </div>

                    <div className="mh-side-nav-content md-scroll">

                        {/*CHANNEL LIST*/}
                        <ChannelContainer/>

                        {/*PATIENT LIST*/}
                        <PatientContainer/>

                        <TeamContainer/>
                        

                        {/*TEAM LIST*/}



                        {/*<a href="#!">First Sidebar Link</a>
                        <a href="#!">Second Sidebar Link</a>
                        <Link to="/chat" activeClassName="active">Chat</Link>
                        <Link to="/patient" activeClassName="active">Patient</Link>

                        <div>Hello world</div>*/}
                    </div>

                    <div className="mh-side-nav-footer">
                        <div className="mh-nav-footer-profile">
                            <Avatar size={40} name={this.props.user.name} circular={true} 
                                className="mh-nav-footer-avatar" id="me" />
                            <span className="mh-nav-footer-username">
                                {this.props.user.name}
                            </span>
                            {/*<button id="mh-nav-footer-dropdown-btn" className="mh-nav-footer-dropdown browser-default dropdown-button"
                                data-activates='mh-nav-footer-dropdown' >
                                <i className="fa fa-chevron-up"></i>
                            </button>*/}
                        </div>
                    </div>

                </div>
                
                {/*<a href="#" data-activates="slide-out" className="button-collapse hide-on-large-only"><i className="fa fa-bars"></i> Menu</a>*/}
   
            </header>
    	);
    },

    componentDidMount: function(){

        /*$("mh-nav-footer-dropdown-btn").dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, 
            hover: false, 
            belowOrigin: false
        });*/


    }


});

module.exports = Sidebar;