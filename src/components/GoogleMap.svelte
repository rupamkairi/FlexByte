<script lang="ts">
	import { Maps, initMaps } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		initMaps();
	});
</script>

<div>
	<div id="google-map" class="h-screen" />
</div>
