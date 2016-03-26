var React = require('react');

require('layout/channelFooter.scss');

var ChannelFooter = React.createClass({
	
    render: function(){
        return (

        	<div className="channel-footer">

                <div id="footer-text-container" className="footer-input-container">
                    <div className="footer-btn-container">
                        <a id="chat-footer-dropdown-btn" className="footer-btn waves-effect waves-dark dropdown-button"
                            data-activates='footer-dropdown'>
                            <i className="fa fa-arrow-circle-o-up"></i>
                        </a>
                    </div>

                    <textarea id="footer-textarea" placeholder="Type a message..."/>

                    {/*<div className="footer-btn-container">
                                            <a className="footer-btn waves-effect waves-dark">
                                                <i className="fa fa-pencil-square-o"></i>
                                            </a>
                                        </div>*/}
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

        $('#chat-footer-dropdown-btn').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, 
            hover: false, 
            belowOrigin: false
        });

        /*var footer_input = $('#footer-textarea'),
            hiddenDiv = $(document.createElement('div')),
            content = null;

        //footer_input.addClass('txtstuff');
        hiddenDiv.addClass('hiddendiv common');

        $('#footer-text-container').append(hiddenDiv);

        footer_input.on('keyup', function () {

            content = $(this).val();

            content = content.replace(/\n/g, '<br>');
            hiddenDiv.html(content + '<br class="lbr">');

            $(this).css('height', hiddenDiv.height());

        });*/
    }
    
});

module.exports = ChannelFooter;