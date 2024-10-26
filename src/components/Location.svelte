<script lang="ts">
	import { getGeoLocation } from '$lib';
	import { DEFAULT_ZOOM } from '$lib/maps/settings';
	import { onMount } from 'svelte';

	export let zoom: number = DEFAULT_ZOOM;

	onMount(() => {
		getGeoLocation({ zoom });
	});
</script>
