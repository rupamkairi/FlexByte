import { PUBLIC_GOOGLE_MAP_API, PUBLIC_GOOGLE_MAP_ID } from '$env/static/public';
import { Loader } from '@googlemaps/js-api-loader';
import { getGeoLocation } from './geolocation';

export const loader = new Loader({
	version: 'weekly',
	apiKey: PUBLIC_GOOGLE_MAP_API
});

export const CENTER_OF_INDIA = { lat: 28.6448, lng: 77.216721 };

declare global {
	interface Window {
		map: google.maps.Map;
	}
}

export let MapsLibrary: google.maps.MapsLibrary;
export type MapElement = google.maps.Map;

export let MarkerLibrary: google.maps.MarkerLibrary;
export type MarkerElement = google.maps.marker.AdvancedMarkerElement;

export type ClickEvent = google.maps.MapMouseEvent;

let instance: google.maps.Map | null = null;

export async function loadMap() {
	MapsLibrary = await loader.importLibrary('maps');
	MarkerLibrary = await loader.importLibrary('marker');
}

export async function initMap() {
	await loadMap();

	const position = getGeoLocation();
	let LatLng = null;
	if (position) {
		LatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
	}

	instance = new MapsLibrary.Map(document.getElementById('google-map') as HTMLElement, {
		center: LatLng,
		mapId: PUBLIC_GOOGLE_MAP_ID,
		fullscreenControl: false,
		streetViewControl: false,
		mapTypeControl: false,
		zoomControl: false,
		draggableCursor: ''
	});

	window.map = instance;
}

export async function onMapClick(callback: (e: google.maps.MapMouseEvent) => void) {
	if (!instance) return;
	instance.addListener('click', callback);
}

export default instance;
