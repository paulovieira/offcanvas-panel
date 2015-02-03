
var panelExample = $('#menu-container').scotchPanel({
//    containerSelector: , // Make this appear on the entire screen
    direction: 'left', // Make it toggle in from the left
    duration: 100, // Speed in ms how fast you want it to be
    transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
    clickSelector: '#toggle-menu', // Enables toggling when clicking elements of this class
    distanceX: '300px', // Size fo the toggle
    enableEscapeKey: true // Clicking Esc will close the panel
});

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([32.74, -16.95], 11);

// add an OpenStreetMap tile layer

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
	id: 'examples.map-i875mjb7'
}).addTo(map);
/**/