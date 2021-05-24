mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhcmFiaXJrIiwiYSI6ImNrbjhxeDAxZzEwa2Eyd282bWx3bWpqa3YifQ.rQcU1ZFEzilWUU-rGZX7CA';
            
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/clarabirk/ckots480a1xlx17nvqqhvdxva',
  center: [9.87, 56.25],
  zoom: 11
});

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.85, 56.25]
    },
    properties: {
      title: 'CLC-Rustfri',
      description: 'Norgesvej 10, 8450 Hammel'
    }
  }]
};

// add markers to map
geojson.features.forEach(function(marker) {

// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
  .addTo(map);
});