function TimeUtils(){}

//returns string in time HH:MM AM/PM
TimeUtils.formatAMPM = function(timestamp)
{
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0'+minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	
	return strTime;
}

//returns timestamp longs as string in Month/Day format with special dates if dates are < 7 days ago
TimeUtils.MDFormat = function( timestamp )
{
	var MMDD = new Date(timestamp);

    var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    var strDate = "";

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var yesterday = new Date();
    yesterday.setHours(0, 0, 0, 0);
    yesterday.setDate(yesterday.getDate() - 1);

    var thisweek = new Date();
    thisweek.setHours(0, 0, 0, 0);
    thisweek.setDate(thisweek.getDate() - 7);

    if (today.getTime() <= MMDD.getTime()) {
        strDate = "TODAY";
    } else if (yesterday.getTime() <= MMDD.getTime()) {
        strDate = "YESTERDAY";
    } else if (thisweek.getTime() <= MMDD.getTime()){
        strDate = days[MMDD.getDay()]; 
    } else {
        strDate = months[MMDD.getMonth()] + "-" + MMDD.getDate();
    }

    strDate += " " + TimeUtils.formatAMPM(timestamp);

    return strDate;
}

//returns long format timestamp
TimeUtils.TDFormat = function(timestamp){
    var date = new Date(timestamp);
    var options = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    };

    return date.toLocaleTimeString("en-us", options);
}

module.exports = TimeUtils;