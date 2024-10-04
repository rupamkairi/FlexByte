import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { loader, MarkerElement, MarkerLibrary } from './maps';
import { getGeoLocation } from './geolocation';

let you: MarkerElement;
let markers: MarkerElement[] = [];
let markerCluster: MarkerClusterer;

export async function showMarkers(_markers: any[] = []) {
	const { map } = window;

	const image = {
		url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
		size: new google.maps.Size(20, 32),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 32)
	};

	_markers.forEach((_marker, index) => {
		markers.push(
			new MarkerLibrary.AdvancedMarkerElement({
				position: _marker,
				map,
				title: 'Ad ' + index
			})
		);
	});

	markerCluster = new MarkerClusterer({ map, markers });
}

export async function showMe() {
	await showMarkers();
}
