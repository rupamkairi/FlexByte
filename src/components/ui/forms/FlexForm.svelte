<script lang="ts">
	import { Button, Input, Label } from 'flowbite-svelte';
	import { placeholders } from '../../../constants/contents';
	import FlexLocationGoogleMap from './FlexLocationGoogleMap.svelte';

	export let form;
</script>

<div>
	<Label for="flex-name" class="block">Flex name</Label>
	<Input id="flex-name" type="text" placeholder={placeholders.flexName} bind:value={$form.name} />
	<br />

	<div class="grid grid-cols-2 gap-4">
		<div>
			<Label for="flex-width" class="block">Width</Label>
			<Input id="flex-width" type="text" placeholder={''} bind:value={$form.lat} />
		</div>
		<div>
			<Label for="flex-height" class="block">Height</Label>
			<Input id="flex-height" type="text" placeholder={''} bind:value={$form.lng} />
		</div>
	</div>
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
	</div>
	<br />
</div>
