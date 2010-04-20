// For iPhone and iPad
// <meta name="viewport" content="width = device-width" />
setViewPort = function() {
	var viewport = document.createElement("meta");
	viewport.setAttribute("name", "viewport");
	viewport.setAttribute("content", "width=device-width");
	document.getElementsByTagName("head")[0].appendChild(viewport);
}(); // Self execute