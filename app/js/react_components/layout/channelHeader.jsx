var React = require('react');

require('layout/channelHeader.scss');

import { connect } from 'react-redux'

var ChannelHeader = React.createClass({
	
    getDefaultProps: function(){
        return {
            channelName: "channel",
            members: 1,
            channelDescription: "description"
        }
    },

    render: function(){

        var name = this.props.channelName;
        var members = this.props.members + " member" + ((this.props.members > 1)?"s":"");
        var description = this.props.channelDescription;

        return (

        	<div className="channel-header">

                <a href="#" data-activates="slide-out" className="button-collapse hide-on-large-only"><i className="fa fa-bars"></i> Menu</a>

        		<div className="channel-messages-header">

        			<div className="channel-title">
        				<h2 className="channel-name">#{name}</h2>

        				<div className="channel-info">
        					<span>{members}</span>
        					<span className="topic-divider">|</span>
        					<span>{description}</span>
        				</div>
        			</div>

        			<div className="channel-title-actions">

        			</div>
        		</div>
        	
        		<div className="flex-header hide-on-med-and-down">
                    <div className="flex-actions">
                        <div className="search-wrapper card">
                            <input id="search" />
                            <i className="fa fa-search hover-icon search-icon"></i>
                        </div>

                        <a className="btn-floating btn-medium waves-effect waves-light action-icon tooltipped"
                            data-position="bottom" data-delay="50" data-tooltip="Channel Settings">
                            <i className="fa fa-cog"></i>
                        </a>
                        <a className="btn-floating btn-medium waves-effect waves-light action-icon tooltipped"
                            data-position="bottom" data-delay="50" data-tooltip="Important Items">
                            <i className="fa fa-star-o"></i>
                        </a>
                        <a className="btn-floating btn-medium waves-effect waves-light action-icon dropdown-button"
                            data-activates='settings-dropdown'>
                            <i className="fa fa-ellipsis-v"></i>
                        </a>

                        <ul id='settings-dropdown' className='dropdown-content'>
                            <li><a href="#!">one</a></li>
                            <li><a href="#!">two</a></li>
                            <li className="divider"></li>
                            <li><a href="#!">three</a></li>
                        </ul>

                    </div>

                    
        		</div>

        	</div>
    	);
    },

    componentDidMount: function(){
        $('.tooltipped').tooltip({delay: 50});

        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, 
            hover: false, 
            belowOrigin: true, 
            alignment: 'left'
        });
    }
    
});

module.exports = ChannelHeader;

