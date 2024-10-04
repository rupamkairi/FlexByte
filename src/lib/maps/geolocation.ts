export function getGeoLocation(): null | GeolocationPosition {
	if (!navigator?.geolocation) {
		alert("Browser doesn't support Geolocation");
		return null;
	}

	navigator?.geolocation?.getCurrentPosition(
		(position) => {
			console.log({ position });

			const { map } = window;

			const pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			map.setCenter(pos);
			map.setZoom(15);

			return position;
		},
		(error) => {
			console.log('Error or Permission required', error);
			return null;
		}
	);

	return null;
}
