import React from 'react'
import {Link} from 'react-router'

require('layout/landingLayout.scss');

var LandingLayout = React.createClass({

    render: function() {
        return (
            <div className="app-landing">

                {this.renderNav()}

                <main className="landing landing-content container valign-wrapper">
                    {this.props.children}
                </main>

                {this.renderFooter()}
            </div>
        );
    },

    renderNav: function(){
        return (<LandingNav />);
    },

    renderFooter: function(){
        return (<LandingFooter />);
    }

});

module.exports = LandingLayout;

var LandingNav = React.createClass({

    render: function(){
        return (
            <header className="landing">
                <nav>
                    <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo">
                            <img src="/img/median-logo_wc.png" />
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/" activeClassName="active">Home</Link></li>
                            <li><Link to="about" activeClassName="active">About</Link></li>
                            <li><Link to="signup" activeClassName="active">Signup</Link></li>

                            <li><Link to="chat" activeClassName="active">Chat</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }

});

var LandingFooter = React.createClass({

    render: function(){
        return (
            <footer className="landing page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2014 Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        );
    }

});