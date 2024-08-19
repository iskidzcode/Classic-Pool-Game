(function() {
console.log('Widget script loaded');
var script = document.createElement('script');
script.src = 'https://adsreference.com/widget.js?id=1724069896873659000';
script.defer = true;
script.onload = function() {
var widget = document.createElement('div');
widget.id = 'widget';
document.getElementById('widgetContainer').appendChild(widget);
};
document.head.appendChild(script);
})();
