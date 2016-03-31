import React from 'react'
import {Link} from 'react-router'

import { connect } from 'react-redux'

require('layout/landingLayout.scss');

var Avatar = require('general/avatarGen.jsx');

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
        return (<LandingNav user={this.props.user}/>);
    },

    renderFooter: function(){
        return (<LandingFooter />);
    }

});

var mapStateToProps = function(state){
    return {user:state.user};
};

module.exports = connect(
  mapStateToProps
)(LandingLayout)

var LandingNav = React.createClass({

    render: function(){

        var chatLink;
        if (this.props.user != null && this.props.user.id != null){
            chatLink = (
                <li className="li-chat-link">
                    <Link to="chat/general" activeClassName="active">
                        <div className="chat-link">
                            Median Chat &nbsp;&nbsp;<i className="fa fa-chevron-right"></i>
                        </div>
                    </Link>
                </li>
            );
        }

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

                            <li><Link to="signup" activeClassName="active">Login</Link></li>

                            {chatLink}
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
                {/*<div className="container">
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
                </div>*/}
                <div className="footer-copyright">
                    <div className="container">
                        © 2016 Median
                        <img className="right" src="img/shuffle-logo_sm.png"/>
                        
                    </div>
                </div>
            </footer>
        );
    }

});

