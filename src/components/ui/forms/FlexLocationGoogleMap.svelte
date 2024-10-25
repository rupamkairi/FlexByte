<script lang="ts">
	import { initMap, showMe } from '$lib';
	import { onMount } from 'svelte';

	// export let marker;

	onMount(async () => {
		await initMap();
		// await showMe();

		// if (marker) {
		// 	const { lat, lng } = marker;
		// 	if (lat && lng) {
		// 		console.log('show marker');
		// 	}
		// }
	});
</script>

<div id="google-map" class="rounded-lg h-screen-50" />
