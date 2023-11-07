import map from '$lib/maps';

export function getGeoLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				const map = window.map;

				console.log(pos);
				map.setCenter(pos);
			},
			() => {
				console.log('Error or Permission required');
				// handleLocationError(true, infoWindow, map.getCenter());
			}
		);
	} else {
		// Browser doesn't support Geolocation
		alert("Browser doesn't support Geolocation");
		// handleLocationError(false, infoWindow, map.getCenter());
	}
}
