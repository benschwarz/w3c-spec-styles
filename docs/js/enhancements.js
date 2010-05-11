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
