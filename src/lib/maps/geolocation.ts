import { DEFAULT_ZOOM } from './settings';

export function getGeoLocation({ zoom = DEFAULT_ZOOM }: any): null | GeolocationPosition {
	if (!navigator?.geolocation) {
		alert("Browser doesn't support Geolocation");
		return null;
	}

	navigator?.geolocation?.getCurrentPosition(
		(position) => {
			// console.log({ position });

			const { map } = window;
			if (!map) {
				return;
			}

			const pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			map.setCenter(pos);
			map.setZoom(zoom);

			return position;
		},
		(error) => {
			console.log('Error or Permission required', error);
			return null;
		}
	);

	return null;
}
