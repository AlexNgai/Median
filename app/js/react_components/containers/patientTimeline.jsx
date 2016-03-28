var React = require('react');

var Avatar = require('general/avatarGen.jsx');

require('layout/patientTimeline.scss');

var TimeUtils = require('utils/timeUtils.js');

var scrollEvent;

var PatientTimeline = React.createClass({

	getDefaultProps: function(){
		return {
			userID: 1,
			timelineEvents: [
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
        	<div>
	        	<section id="cd-timeline" className="cd-container">
	        		{this.renderTimelineEvents()}
	    		</section>

	    		<div className="event-btn-container">
	    			<AddEventButton />
	    		</div>
	    		
    		</div>
    	);
    },

 	renderTimelineEvents: function(){

 		var timelineEvents = this.props.timelineEvents;
 		var rows = [];
		for (var i=0; i<timelineEvents.length; i++){
			rows.push (
				<TimelineEvent key={i} data={timelineEvents[i]}/>
			);
		}

		return rows;
	},

	componentDidMount: function(){

		//start scrolled at the bottom
		$(".channel-content").prop({ scrollTop: $(".channel-content").prop("scrollHeight") });

		console.log("add timeline animations");

		var $timeline_block = $('.cd-timeline-block');

		var animThresh = 0.9;

		//hide timeline blocks which are outside the viewport
		$timeline_block.each(function(){
			if($(this).offset().top > $(window).scrollTop()+$(window).height()*animThresh) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
			}
		});

		//on scolling, show/animate timeline blocks when enter the viewport
		scrollEvent = $('.channel-content').scroll( function(){
			$timeline_block.each(function(){
				if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*animThresh && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
					//console.log("uncovering hidden elem");
					$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
				}
			});
		});
	},

	componentWillUnmount: function(){
		//verify that this works
		scrollEvent.unbind();
	}

});

module.exports = PatientTimeline;



var TimelineEvent = React.createClass({

	render: function(){
		return (
			<div className="cd-timeline-block cssanimations">
		      	<div className="cd-timeline-img cd-picture">
		        	<i className="fa fa-times"></i>
		        	{/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>*/}
		      	</div>

		      	<div className="cd-timeline-content">
			        <h2>Title of section 1</h2>
			        <p>{this.props.data.body}</p>
			        <a href="#0" className="cd-read-more">Read more</a>
			        <span className="cd-date">Jan 14</span>
		    	</div>
		    </div>
		);
	}

});

var AddEventButton = React.createClass({

	getInitialState: function(){
		return {
			isActive: false
		};
	},

	render: function(){
		return (
			
			<div className="mh-fab fixed-action-btn horizontal click-to-toggle">
			    <a className="btn-floating btn-large red">
			      	<i className="fa fa-plus"></i>
			    </a>
			    <ul>
			      	<li><a className="btn-floating red"><i className="fa fa-plus"></i></a></li>
			      	<li><a className="btn-floating yellow darken-1"><i className="fa fa-plus"></i></a></li>
			      	<li><a className="btn-floating green"><i className="fa fa-plus"></i></a></li>
			      	<li><a className="btn-floating blue"><i className="fa fa-plus"></i></a></li>
			    </ul>
			</div>
		);
	}

});