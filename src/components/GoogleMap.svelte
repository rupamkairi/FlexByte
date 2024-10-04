<script lang="ts">
	import { initMap, showMarkers } from '$lib';
	import { myCluster, showMe } from '$lib/markers';
	import { onMount } from 'svelte';

	onMount(async () => {
		await initMap();
		await showMe();
		await showMarkers(myCluster);
	});
</script>

<div>
	<div id="google-map" class="h-screen" />
</div>
