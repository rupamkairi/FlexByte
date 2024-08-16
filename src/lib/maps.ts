import { Loader } from '@googlemaps/js-api-loader';
import { PUBLIC_GOOGLE_API } from '$env/static/public';

export const loader = new Loader({
	version: 'weekly',
	apiKey: PUBLIC_GOOGLE_API
});

const myLocation = { lat: 18.5303046, lng: 73.9120743 };

declare global {
	interface Window {
		map: google.maps.Map;
	}
}

export let GoogleMaps: google.maps.MapsLibrary;
export let Map: typeof google.maps.Map;

let instance: google.maps.Map | null = null;

export async function loadMap() {
	GoogleMaps = await loader.importLibrary('maps');
	Map = GoogleMaps.Map;
}
loadMap();

export async function initMap() {
	// GoogleMaps = await loader.importLibrary('maps');
	// Map = GoogleMaps.Map;
	await loadMap();

	instance = new Map(document.getElementById('google-map') as HTMLElement, {
		center: myLocation,
		zoom: 14
	});

	window.map = instance;
}

export default instance;
