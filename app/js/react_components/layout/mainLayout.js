import React from 'react'
import {Link} from 'react-router'

require('layout/mainLayout.scss');

var MainLayout = React.createClass({

  render: function() {
    return (
      <div className="app">

        <div id="banner"></div>
      
        <header className="primary-header">
        	<div id="team-menu">
        		<button className="notification-btn">Notifications</button>

        		<div className="team-name-container">
        			<span id="team-name">Team Name</span>
        			<button>v</button>

        		</div>

        		<div className="presence-container">
        			<i id="user-presence">presence</i>
        			<span id="team-header-username">username</span>
        		</div>
        	</div>

        	<div id="channel-header">
        		<div className="content-header">
        			<div className="channel-title">
        			
        				Channel title
        			</div>

        			<div className="channel-actions">
        				channel actions
        			</div>
        		</div>

        		<div className="accessory-header">

        		</div>
        	</div>

        </header>

        <aside className="primary-aside">
	        <ul>
	            <li><Link to="/" activeClassName="active">Home</Link></li>
	            <li><Link to="/chat" activeClassName="active">Chat</Link></li>
	            <li><Link to="/patient" activeClassName="active">Patient</Link></li>
	        </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }

});

module.exports = MainLayout;