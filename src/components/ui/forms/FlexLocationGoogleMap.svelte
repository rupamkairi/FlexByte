<script lang="ts">
	import { initMap, showMe } from '$lib';
	import { onMount } from 'svelte';

	onMount(async () => {
		await initMap();
		await showMe();
	});
</script>

<div id="google-map" class="rounded-lg h-screen-50" />
