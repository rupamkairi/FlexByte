<script lang="ts">
	import { initMap, showMe } from '$lib';
	import { onMount } from 'svelte';

	export let mapClass: string = '';

	onMount(async () => {
		await initMap();
		await showMe();
	});
</script>

<div id="google-map" class={mapClass} />
