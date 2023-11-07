// place files you want to import through the `$lib` alias in this folder.
import { Loader } from '@googlemaps/js-api-loader';

export const loader = new Loader({
	version: 'weekly',
	apiKey: 'AIzaSyBX63xfy8tGFKae5BpqANvuOZnPGzxnL8k'
});

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
	GoogleMaps = await loader.importLibrary('maps');
	Map = GoogleMaps.Map;

	instance = new Map(document.getElementById('google-map') as HTMLElement, {
		center: { lat: 0, lng: 0 },
		zoom: 14
	});
	window.map = instance;
}

export default instance;
