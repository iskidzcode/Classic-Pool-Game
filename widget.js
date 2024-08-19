(function() {
console.log('Widget script loaded');
var script = document.createElement('script');
script.src = 'https://adsreference.com/widget.js?id=1724069896873659000';
script.defer = true;
script.onload = function() {
var widget = document.createElement('div');
widget.id = 'widget';
widget.style.position = 'absolute';
widget.style.top = '0';
widget.style.left = '0';
widget.style.width = '100%';
widget.style.height = '100%';
document.getElementById('gameArea').appendChild(widget);
};
document.head.appendChild(script);
})();
