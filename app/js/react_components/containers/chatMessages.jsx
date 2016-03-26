var React = require('react');

var Avatar = require('general/avatarGen.jsx');

require('layout/chatMessages.scss');

var ChatMessages = React.createClass({

	getDefaultProps: function(){
		return {
			messages: [
				{
					id: 1,
					body: "Lorem ipsum dolor sit amet, ut dolorem gloriatur pro, mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est, qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 2342523,
					user: {
						name: "Jser 1",
						id: 1
					}
				},
				{
					id: 2,
					body: " qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 2342523,
					user: {
						name: "fwefer 1",
						id: 2
					}
				},
				{
					id: 3,
					body: "mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est. Omnesque tincidunt adipiscing nam ea.",
					date: 2342523,
					user: {
						name: "Jser 1",
						id: 1
					}
				}

			]
		}
	},

    render: function(){
        
        return (
        	<div className="chat-msg-container">
        		{this.renderMsgs()}
    		</div>
    	);
    },

 	renderMsgs: function(){
 		var rows = [];
    	for (var i=0; i<this.props.messages.length; i++){
    		var msg = this.props.messages[i];
    		rows.push(<ChatMessageItem key={msg.id} data={msg} />)
    	}

    	if (this.props.messages.length == 0){

    		//OPENS UP MODAL WITH COMPLETE LIST OF PATIENTS
    		//rows.push(<div key="more" className="nav-option-more">+{this.props.team.length-4} more</div>);
    	
    		//DO SOMETHING HERE FOR EMPTY CHAT

    	}

    	return rows;
 	}

});

module.exports = ChatMessages;

var ChatMessageItem = React.createClass({

	render: function(){
		return (
			<div className="chat-msg">
				<Avatar size={50} name={this.props.data.user.name} circular={false} 
					id={"msg-" + this.props.data.user.id + "-" + this.props.data.id} 
					className="chat-msg-avatar"/>
				<span>
					<div className="chat-msg-userinfo">
						<strong className="user-name">
							{this.props.data.user.name}
						</strong>

						<span className="msg-time">1:15 PM</span>
					</div>

					<p className="chat-msg-content">{this.props.data.body}</p>
				</span>

			</div>
		);
	}

});