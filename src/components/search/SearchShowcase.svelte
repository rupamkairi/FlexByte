<script>
	import { onMount } from 'svelte';
	import Location from '../Location.svelte';
	import SearchGoogleMap from './SearchGoogleMap.svelte';
	import { configureMapSettings } from '$lib/maps/settings';
	import axios from 'axios';
	import { showMarkers } from '$lib';

	onMount(async () => {
		configureMapSettings();
		const data = (await axios.get('/api/public/flexes')).data;
		const markers = data.flexes.map((el) => ({ lat: el.latitude, lng: el.longitude }));
		showMarkers(markers);
	});
</script>

<div class="max-w-screen-lg h-96 mx-auto p-2 rounded">
	<Location zoom={13} />
	<SearchGoogleMap mapClass={'h-[50vh] rounded-md'} />
</div>
