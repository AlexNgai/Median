var React = require('react');
import {Link} from 'react-router'

require('layout/sidebar.scss');

var Avatar = require('general/avatarGen.js');

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




                    <div className="mh-side-nav-content">

                        <a href="#!">First Sidebar Link</a>
                        <a href="#!">Second Sidebar Link</a>
                        <Link to="/chat" activeClassName="active">Chat</Link>
                        <Link to="/patient" activeClassName="active">Patient</Link>

                        <div>Hello world</div>
                    </div>

                    <div className="mh-side-nav-footer">
                        <div className="mh-nav-footer-profile">
                            <span>
                                <Avatar />
                                User1
                            </span>
                            <span>
                                icon
                            </span>
                        </div>
                    </div>
                </div>
                
                {/*<a href="#" data-activates="slide-out" className="button-collapse hide-on-large-only"><i className="fa fa-bars"></i> Menu</a>*/}
   
            </header>
    	);
    }


});

module.exports = Sidebar;