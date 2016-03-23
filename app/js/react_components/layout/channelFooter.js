var React = require('react');

require('layout/channelFooter.scss');

var ChannelFooter = React.createClass({
	
    render: function(){
        return (

        	<div className="channel-footer">

                <div className="footer-input-container">
                    <div className="footer-btn-container">
                    <a className="footer-btn waves-effect waves-dark dropdown-button"
                        data-activates='footer-dropdown'>
                        <i className="fa fa-arrow-circle-o-up"></i>
                    </a>
                    </div>

                    <textarea id="footer-textarea" placeholder="text here"/>
                </div>


                <ul id='footer-dropdown' className='dropdown-content'>
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">three</a></li>
                </ul>

        	</div>
    	);
    },

    componentDidMount: function(){

        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, 
            hover: false, 
            belowOrigin: false
        });
    }
    
});

module.exports = ChannelFooter; 