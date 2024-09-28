<script lang="ts">
	import { Label, Select } from 'flowbite-svelte';
	import { placeholders } from '../../../constants/contents';
	import { flexTypes } from '$/store/generics/flex-types';

	export let value: number | null;

	let items;
	flexTypes.subscribe((data) => {
		items = data.map((item) => ({ value: item.id, name: item.name }));
	});
</script>

<div>
	<Label for="select-flex-type-input" class="">Select Flex type</Label>
	<Select
		id="select-flex-type-input"
		items={items ?? []}
		placeholder={placeholders.flexTypeSelect}
		bind:value
	/>
</div>
