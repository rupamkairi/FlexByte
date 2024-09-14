<script lang="ts">
	import { Button, Input, Label } from 'flowbite-svelte';
	import { placeholders } from '../../../constants/contents';

	export let form;
</script>

<div>
	<Label for="flex-name" class="block">Flex name</Label>
	<Input id="flex-name" type="text" placeholder={placeholders.flexName} bind:value={$form.name} />
	<br />
</div>
