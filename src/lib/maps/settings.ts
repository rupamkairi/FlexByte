export const DEFAULT_ZOOM = 13;

export function configureMapSettings() {
	const { map } = window;
	if (!map) return;

	map.setZoom(10);
}
