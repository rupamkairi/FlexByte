<script lang="ts">
	import { Label, Select } from 'flowbite-svelte';
	import { placeholders } from '../../../constants/contents';
	export let value: number | null;
</script>

<div>
	<Label for="select-flex-type-input" class="">Select Flex type</Label>
	<Select
		id="select-flex-type-input"
		items={[
			{ value: 1, name: 'Outdoors' },
			{ value: 2, name: 'Digital' }
		]}
		placeholder={placeholders.flexTypeSelect}
		bind:value
	/>
</div>
