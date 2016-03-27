function GeneralUtils(){}
 
GeneralUtils.multiply = function(val1 , val2)
{
	return (val1*val2);
}

GeneralUtils.isUrl = function( urlStr )
{
	var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	return regexp.test(urlStr);
}


module.exports = GeneralUtils;