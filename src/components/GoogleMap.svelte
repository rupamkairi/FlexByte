<script lang="ts">
	import { initMap } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		initMap();
	});
</script>

<div>
	<div id="google-map" class="h-screen" />
</div>
