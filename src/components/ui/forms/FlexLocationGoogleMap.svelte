<script lang="ts">
	import Location from '$/components/Location.svelte';
	import { initMap, showMe } from '$lib';
	import { onMount } from 'svelte';

	// export let marker;

	onMount(async () => {
		await initMap();
	});
</script>

<Location />
<div id="google-map" class="rounded-lg h-screen-50" />
