import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { loader } from './maps';

const myMarker = { lat: 18.5303046, lng: 73.9120743 };
export const myCluster = [
	{ lat: 18.533122, lng: 73.93295 },
	{ lat: 18.533129, lng: 73.932966 },
	{ lat: 18.533124, lng: 73.932903 },
	{ lat: 18.532961, lng: 73.93295 },
	{ lat: 18.532974, lng: 73.932939 },

	{ lat: 18.532357, lng: 18.532357 },
	{ lat: 18.532417, lng: 73.916988 },
	{ lat: 18.532226, lng: 73.917199 },
	{ lat: 18.532201, lng: 73.917209 },
	{ lat: 18.532229, lng: 73.917157 }
];

export let GoogleMapsMarker: google.maps.MarkerLibrary;
export let Marker: typeof google.maps.Marker;

let you: google.maps.Marker;
let markers: google.maps.Marker[] = [];
let markerCluster: MarkerClusterer;

export async function loadMarker() {
	GoogleMapsMarker = await loader.importLibrary('marker');
	Marker = GoogleMapsMarker.Marker;
}

export async function showMarker(_markers: any[] = []) {
	await loadMarker();

	const { map } = window;

	if (!_markers.length) {
		return new Marker({
			position: myMarker,
			map,
			title: 'You'
		});
	} else {
		console.log({ _markers });
		_markers.forEach((_marker, index) => {
			markers.push(
				new Marker({
					position: _marker,
					title: 'Ad ' + index
				})
			);
		});
	}

	markerCluster = new MarkerClusterer({ map, markers });
}

export async function showYou() {
	you = (await showMarker()) as typeof you;
}
