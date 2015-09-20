//Core js file for style rules to apply
(function(app){
	"use strict";

	if(!app){
		return false;
	}
	var sheet,
		url = app.location.href,
		cssRule = {};

	cssRule = {
		'selector' : '.navbar-inverse',
		'rules' : 'background-color:#eee'
	};


	//Check if location.href has query sting
	//console.log(url.split("?"));
	if(url.split("?").length > 1){
		var oData = ExtractQueryString();
		cssRule.rules = 'background-color:#' + oData.color;
	}
	
	sheet = (function(){
		var style = app.document.createElement("style");

		//webkit hack
		style.appendChild(app.document.createTextNode(""));

		document.head.appendChild(style);
		//style - only style tag
		//style.sheet - returns a object of style tag
		return style.sheet;
	})();

	function ExtractQueryString() {
	    var oResult = {};
	    var aQueryString = (location.search.substr(1)).split("&");
	    for (var i = 0; i < aQueryString.length; i++) {
	        var aTemp = aQueryString[i].split("=");
	        if (aTemp[1].length > 0) {
	            oResult[aTemp[0]] = unescape(aTemp[1]);
	        }
	    }
	    return oResult;
	}

	function addCSSRule(sheet, selector, rules, index) {
		if("insertRule" in sheet) {
			sheet.insertRule(selector + "{" + rules + "}", index);
		}
		else if("addRule" in sheet) {
			sheet.addRule(selector, rules, index);
		}
	}

	addCSSRule(sheet, cssRule.selector, cssRule.rules);

	console.log(sheet);

})(window);