import React from 'react'
import {Link} from 'react-router'

var LandingLayout = React.createClass({

  render: function() {
    return (
      <div className="app">
        
        <header className="primary-header">median</header>
        <aside className="primary-aside">
	        <ul>
	            <li><Link to="/" activeClassName="active">Home</Link></li>
	            <li><Link to="about" activeClassName="active">About</Link></li>
	        </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }

});

module.exports = LandingLayout;