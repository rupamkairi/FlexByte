<script lang="ts">
	import type { ClickEvent } from '$lib';
	import { initMap, onMapClick } from '$lib';
	import { Input, Label, Textarea } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { placeholders } from '../../../constants/contents';
	import FlexLocationGoogleMap from './FlexLocationGoogleMap.svelte';
	import axios from 'axios';
	import { PUBLIC_GOOGLE_MAP_API } from '$env/static/public';

	export let form;

	onMount(async () => {
		await initMap();
		onMapClick(async (e: ClickEvent) => {
			$form.lat = e.latLng?.lat();
			$form.lng = e.latLng?.lng();

			const res = await axios.get(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${$form.lat},${$form.lng}&result_type=street_address&key=${PUBLIC_GOOGLE_MAP_API}`
			);
			// console.log(res.data);

			if (!res.data) return;
			const { results } = res.data;

			if (!results?.length) return;
			// console.log(results[0]?.formatted_address);
			$form.address = results[0]?.formatted_address;
		});
	});
</script>

<div>
	<Label for="flex-name" class="block">Flex name</Label>
	<Input id="flex-name" type="text" placeholder={placeholders.flexName} bind:value={$form.name} />
	<br />

	<div class="grid grid-cols-2 gap-4">
		<div>
			<Label for="flex-width" class="block">Width</Label>
			<Input id="flex-width" type="text" placeholder={'In Meters'} bind:value={$form.width} />
		</div>
		<div>
			<Label for="flex-height" class="block">Height</Label>
			<Input id="flex-height" type="text" placeholder={'In Meters'} bind:value={$form.height} />
		</div>
	</div>
	<br />
	<hr />
	<br />

	<div>
		<Label for="flex-location-map" class="block">Mark your Flex on the Map</Label>
		<p class="mb-2 text-sm">We will take the Coordinates & Address automatically.</p>
		<FlexLocationGoogleMap />
	</div>
	<br />
	<div class="grid grid-cols-2 gap-4">
		<div>
			<Label for="flex-latitude" class="block">Latitude</Label>
			<Input id="flex-latitude" type="text" placeholder={''} bind:value={$form.lat} />
		</div>
		<div>
			<Label for="flex-longitude" class="block">Longitude</Label>
			<Input id="flex-longitude" type="text" placeholder={''} bind:value={$form.lng} />
		</div>
		<div class="col-span-2">
			<Label for="flex-address" class="block">Address</Label>
			<Textarea
				id="flex-address"
				placeholder={'Will be autofilled'}
				class="field-content"
				bind:value={$form.address}
			/>
		</div>
	</div>
	<br />
</div>
