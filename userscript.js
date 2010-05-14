// ==UserScript==
// @name						W3C Specification styles
// @description			An alternate stylesheet for the typographically concerned. 
// @namespace				AB+C
// @include					http://www.w3.org/TR/*/*
// @include					http://dev.w3.org/*
// @exclude					http://www.w3.org/TR/tr-date-all*
// @exclude					http://w3.org/TR/tr-date-all*
// @exclude					http:/www.w3.org/TR/
// @exclude					http://w3.org/TR/
// @version					0.0.4
// @contributor			benschwarz
// ==/UserScript==

var W3C = function(){
  var elements = {
    link: {
      href: "http://github.com/benschwarz/w3c-spec-styles/raw/master/docs/css/master.css",
      rel:  "stylesheet"
    },
    script: {
      src: "http://github.com/benschwarz/w3c-spec-styles/raw/master/docs/js/enhancements.js"
    }
  }
  
  for(var tag in elements) {
		var element = document.createElement(tag);
		for(var attribute in elements[tag]) {
			element.setAttribute(attribute, elements[tag][attribute]);
			document.body.appendChild(element);
		}
	}
}();