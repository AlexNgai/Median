var React = require('react');

var AvatarGen = React.createClass({

	getDefaultProps: function(){
		return {
			size: 30,
			imgUrl: "",
			name: "",
			circular: false,
			id: 0
		}
	},

    render: function(){
        
    	var avatar;

    	if (this.props.imgUrl != ""){
    		avatar = (<img src={this.props.imgUrl} width={this.props.size} height={this.props.size} 
    			className={"mh-avatar" + ((this.props.circular)?" img-circle":"")}/>);
    	} else {
    		avatar = (<canvas id={"user-icon-" + this.props.id} width={this.props.size} height={this.props.size} 
    			className={"mh-avatar" +((this.props.circular)?" img-circle":"")}></canvas>);
    	}

        return (
        	<span>
        		{avatar}
    		</span>
    	);
    },

    componentDidMount: function(){
    	
    	if (this.props.imgUrl != "") return;

    	var colours = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];

		var name = this.props.name;
		var initials = "An";

		if (this.props.name != null && this.props.name != ""){
			var nameSplit = name.split(" ");
		    var tinitials = "";
		    tinitials += nameSplit[0].charAt(0).toUpperCase();
		    
		    if (nameSplit.length >= 2){
		    	tinitials += nameSplit[1].charAt(0).toUpperCase();
			}

			initials = tinitials;
		}

		var charIndex = initials.charCodeAt(0) - 65,
		    colourIndex = charIndex % 19;

		var canvas = document.getElementById("user-icon-" + this.props.id);
		var context = canvas.getContext("2d");

		var canvasWidth = $(canvas).attr("width"),
		    canvasHeight = $(canvas).attr("height"),
		    canvasCssWidth = canvasWidth,
		    canvasCssHeight = canvasHeight;

		if (window.devicePixelRatio) {
		    $(canvas).attr("width", canvasWidth * window.devicePixelRatio);
		    $(canvas).attr("height", canvasHeight * window.devicePixelRatio);
		    $(canvas).css("width", canvasCssWidth);
		    $(canvas).css("height", canvasCssHeight);
		    context.scale(window.devicePixelRatio, window.devicePixelRatio);
		}

		context.fillStyle = colours[colourIndex];
		context.fillRect (0, 0, canvas.width, canvas.height);
		context.font = Math.round(this.props.size/2.2) + "px Montserrat, Helvetica";
		context.textAlign = "center";
		context.fillStyle = "#FFF";
		context.fillText(initials, canvasCssWidth / 2, canvasCssHeight / 1.5);
    }


});

module.exports = AvatarGen;