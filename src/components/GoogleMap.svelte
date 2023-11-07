<script lang="ts">
	import { initMap } from '$lib';
	import { myCluster, showMarker, showYou } from '$lib/markers';
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
