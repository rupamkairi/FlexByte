// place files you want to import through the `$lib` alias in this folder.
import { Loader } from '@googlemaps/js-api-loader';

export const loader = new Loader({
	version: 'weekly',
	apiKey: 'AIzaSyBX63xfy8tGFKae5BpqANvuOZnPGzxnL8k'
});

export const GoogleMaps = await loader.importLibrary('maps');
export const Maps = GoogleMaps.Map;

var instance = null;

export function initMaps() {
	instance = new Maps(document.getElementById('google-map') as HTMLElement, {
		center: { lat: 0, lng: 0 },
		zoom: 14
	});
	window.map = instance;
}

export default instance;
