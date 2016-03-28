var React = require('react');

var Avatar = require('general/avatarGen.jsx');

require('layout/chatMessages.scss');

var TimeUtils = require('utils/timeUtils.js');

var ChatMessages = React.createClass({

	getDefaultProps: function(){
		return {
			userID: 1,
			messages: [
				{
					id: 1,
					body: "Lorem ipsum dolor sit amet, ut dolorem gloriatur pro, mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est, qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 23523,
					user: {
						name: "Jser 1",
						id: 1
					}
				},
				{
					id: 2,
					body: " qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 22523,
					user: {
						name: "fwefer 1",
						id: 2
					}
				},
				{
					id: 3,
					body: "mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est. Omnesque tincidunt adipiscing nam ea.",
					date: 23423,
					user: {
						name: "fwefer 1",
						id: 2
					}
				},
				{
					id: 4,
					body: " qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 33423,
					user: {
						name: "fwefer 1",
						id: 2
					}
				},
				{
					id: 5,
					body: "mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est. Omnesque tincidunt adipiscing nam ea.",
					date: 232524533,
					user: {
						name: "Jser 1",
						id: 1
					}
				},
				{
					id: 6,
					body: "Lorem ipsum dolor sit amet, ut dolorem gloriatur pro, mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est, qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 23523,
					user: {
						name: "Jser 1",
						id: 1
					}
				},
				{
					id: 7,
					body: " qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 22523,
					user: {
						name: "fwefer 1",
						id: 2
					}
				},
				{
					id: 8,
					body: "mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est. Omnesque tincidunt adipiscing nam ea.",
					date: 23423,
					user: {
						name: "fwefer 1",
						id: 2
					}
				},
				{
					id: 9,
					body: " qualisque ocurreret ei his. Omnesque tincidunt adipiscing nam ea.",
					date: 33423,
					user: {
						name: "fwefer 1",
						id: 2
					}
				},
				{
					id: 10,
					body: "mei verterem partiendo suavitate eu. Noluisse democritum cu nec. Quem quis comprehensam ex est. Omnesque tincidunt adipiscing nam ea.",
					date: 232524533,
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
        		{this.renderMsgGroups()}
    		</div>
    	);
    },

 	renderMsgGroups: function(){

		var messages = this.props.messages;

	    var tIncID = 0;      
	    var rows = [];
	    
	    if (messages.length > 0){
	    	rows.push( this.renderDateDivider(messages[0].date, tIncID) );
	    	tIncID++;
	    }

	    var msgSender;
	    var msgSendDate;
	    var msgSenderName;
	    var msgArr = [];
	    if (messages.length > 0)
	    {
	      	for (var i=0; i<messages.length; i++)
	      	{

		        if (msgArr.length == 0)
		        {
					msgSender = messages[i].user.id;
					msgSendDate = messages[i].date;
					msgSenderName = messages[i].user.name;
					msgArr.push( messages[i] );
		        } 
		        else 
		        {
	          		//todo: add grouping by time (currently 15min / 1 hr, 3600000)
	          		if ( messages[i].user.id != msgSender 
	            		|| messages[i].date > (msgSendDate + 900000) )
	            	{

			            rows.push( this.renderChatMsgGroup(msgArr, msgSender, msgSenderName, msgSendDate, tIncID) );
			            tIncID++;

			            //add date/time indicator if notification interval is passed
			            if ( messages[i].date > (msgSendDate + 3600000) ){
			            	rows.push( this.renderDateDivider(messages[i].date, tIncID) );
			            	tIncID++;
			            }

			            //start new msg group
			            msgSender = messages[i].user.id;
			            msgSenderName = messages[i].user.name;
			            msgSendDate = messages[i].date;
			            msgArr = [];
			            msgArr.push( messages[i] );
		          	}

		          	else 
		          	{
		            	msgArr.push( messages[i] );
		          	}
	        	}
	      	}
	      	
	      	rows.push( this.renderChatMsgGroup(msgArr, msgSender, msgSenderName, msgSendDate, tIncID) );
		}

		return rows;
	},

	renderDateDivider: function(timestamp, key){
		return (
			<div className="msg-date" key={key}> 
		        <hr className="separator"/>
		        <strong>{TimeUtils.MDFormat(timestamp)}</strong>
		    </div>
	    );
	},

	renderChatMsgGroup: function(msgArr, msgSender, msgSenderName, msgSendDate, key){
		return (
			<ChatMessageGroup isUser={(this.props.chatID == msgSender)} 
	            messages={msgArr} key={key} sender={msgSenderName} senderID={msgSender}
	            sendDate={msgSendDate} id={key} />
		);
	}

});

module.exports = ChatMessages;

var ChatMessageGroup = React.createClass({
	render: function(){
	    
		var messages = this.props.messages;

	    var tIncID = 0;
	    var rows = [];
	    for (var i=0; i<messages.length; i++){
	      var pos = 0;
	      if (i == 0 && messages.length > 1) pos = 1;
	      else if (i == messages.length - 1 && messages.length > 1){
	        pos = 2;
	      } else if (messages.length == 1){
	        pos = 3;
	      }
	      rows.push( <ChatMessageItem data={messages[i]} key={tIncID} pos={pos}/> );
	      tIncID++; 
	    }

	    var messageContent = (
	        <div className="chat-msg-group">
				<Avatar size={50} name={this.props.sender} circular={false} 
					id={"msg-group-" + this.props.msgSender + "-" + this.props.id} 
					className="chat-msg-avatar"/>
				<span className="full-width">
					<div className="chat-msg-userinfo">
						<strong className="user-name">
							{this.props.sender}
						</strong>

						<span className="msg-time">{TimeUtils.formatAMPM(this.props.sendDate)}</span>
					</div>

					{rows}
				</span>
			</div>

	    );

	    return messageContent;
  	}
});

var ChatMessageItem = React.createClass({

	render: function(){
		return (
			<div className="chat-msg">
				<p className="chat-msg-content">{this.props.data.body}</p>

				{this.renderMessageActions()}
			</div>
		);
	},

	renderMessageActions: function(){
		return (
			<div className="chat-msg-actions">
				<span>{TimeUtils.formatAMPM(this.props.data.date)}</span>
				<a><i className="fa fa-star-o"></i></a>
				<a><i className="fa fa-pencil-square-o"></i></a>
				<a><i className="fa fa-ellipsis-v"></i></a>
			</div>
		);
	}

});