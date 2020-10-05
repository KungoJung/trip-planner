//console.log('Hello from JavaScript')

import mapboxgl from "mapbox-gl";
import {createMarker} from "./marker.js";

mapboxgl.accessToken = "pk.eyJ1IjoiYWxmcmVkZm1lbmciLCJhIjoiY2tmd3A0YWFhMWlhcDJ6czN6Yzl3N2dheCJ9.ChwqYN2fB6bg1_ACOKWICw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map)

createMarker('restaurant', [-75.009, 40.705], map)
createMarker('activity', [-77.009, 40.705], map)
createMarker('hotel', [-80.009, 40.705], map)
