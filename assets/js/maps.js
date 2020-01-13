function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
/* var labels = , and then a string that consists of the letters of the alphabet, from A through Z, all in uppercase.
Each individual letter is going to appear on the markers.*/

/*And then I'm going to create an array: var locations = [ .
And this array will contain a set of objects.
Each object will contain a latitude and a longitude of the different places that I would have visited.*/


    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];
    
/* Now, we need to iterate through that array and create a new marker that has the label from our string.
So to do that, we'll do var markers = locations.map. */

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}