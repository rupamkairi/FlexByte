<script lang="ts">
	import { initMap, showMarker, showYou } from '$lib';
	import { myCluster } from '$lib/markers';
	import { onMount } from 'svelte';

	onMount(async () => {
		await initMap();
		await showYou();
		await showMarker(myCluster);
	});
</script>

<div>
	<div id="google-map" class="h-screen" />
</div>
