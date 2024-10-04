<script lang="ts">
	import { initMap, map, showMe } from '$lib';
	import { onMount } from 'svelte';

	onMount(async () => {
		await initMap();
		await showMe();
	});
</script>

<div>
	<div id="google-map" class="h-screen-50" />
</div>
