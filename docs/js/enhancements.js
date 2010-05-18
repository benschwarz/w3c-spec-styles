// For iPhone and iPad
// <meta name="viewport" content="width = device-width" />
setViewPort = function() {
	var viewport = document.createElement("meta");
	viewport.setAttribute("name", "viewport");
	viewport.setAttribute("content", "width=device-width, maximum-scale=1.0");
	document.getElementsByTagName("head")[0].appendChild(viewport);
}(); // Self execute

// Tidy up tables
tidyTables = function () {
	var unstyle = ["table", "tr", "td"];
	var i, j;
	for(i = 0; i < unstyle.length; i++) {
		var element = document.getElementsByTagName(unstyle[i]);
		for(j = 0; j < element.length; j++) {
			element[j].className = "";
		}
	}
}();

// when prettify is loaded, run it!
(function loopsiloop(){
  if (window.prettyPrint){ 
   prettyPrint();
  } else {
    setTimeout(loopsiloop,100);
  }
})();


// set up code blocks to get hit by prettyprint:
Array.prototype.slice.call(document.querySelectorAll('pre')).forEach(function(v,k,arra){
  v.className += ' prettyprint';
});


var elements = {
  link: {
    href: "http://github.com/benschwarz/w3c-spec-styles/raw/master/docs/css/prettify.css",
    rel:  "stylesheet"
  },
  script: {
    src: "http://github.com/benschwarz/w3c-spec-styles/raw/master/docs/js/prettify.js"
  }
}

for(var tag in elements) {
	var element = document.createElement(tag);
	for(var attribute in elements[tag]) {
		element.setAttribute(attribute, elements[tag][attribute]);
		document.body.appendChild(element);
	}
}







