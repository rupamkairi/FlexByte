<script lang="ts">
	import { getGeoLocation } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		getGeoLocation();
	});
</script>
