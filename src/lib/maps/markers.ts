import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { MarkerElement, MarkerLibrary } from './maps';
import { getGeoLocation } from './geolocation';

let me: MarkerElement;
let markers: MarkerElement[] = [];
let markerCluster: MarkerClusterer;

const pinImg = document.createElement('img');
pinImg.height = 32;
pinImg.width = 32;
pinImg.src = '/pin.png';

export async function showMarker(_marker: any) {
	const { map } = window;

	new MarkerLibrary.AdvancedMarkerElement({
		content: pinImg,
		position: _marker,
		map
	});
}

export async function showMarkers(_markers: any[] = []) {
	const { map } = window;

	_markers.forEach((_marker, index) => {
		markers.push(
			new MarkerLibrary.AdvancedMarkerElement({
				content: pinImg,
				position: _marker,
				map
			})
		);
	});

	markerCluster = new MarkerClusterer({ map, markers });
}

export async function showMe() {
	const position = getGeoLocation({});
	let me = [];
	if (position) {
		me.push({ lat: position.coords.latitude, lng: position.coords.longitude });
	}

	await showMarkers(me);
}
