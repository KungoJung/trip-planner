const mapboxgl = require("mapbox-gl");

function createMarker(type, coordinates, map) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  switch (type) {
    case 'restaurant':
      markerDomEl.style.backgroundImage = "url(https://i.imgur.com/cqR6pUI.png)";
    break;
    case 'activity':
      markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    break;
    case 'hotel':
      markerDomEl.style.backgroundImage = "url(https://i.imgur.com/D9574Cu.png)";
    break;
  }
  const newMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coordinates).addTo(map)
  return newMarker;
}

export {createMarker};
