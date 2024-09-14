<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { CheckOutline } from 'flowbite-svelte-icons';
	import { superForm } from 'sveltekit-superforms';
	import FlexForm from '../../../../components/ui/forms/FlexForm.svelte';
	import SelectFlexType from '../../../../components/ui/forms/SelectFlexType.svelte';

	export let data;

	const { form } = superForm(data.form);

	function submitCreateFlex() {
		console.log($form);
	}
</script>

<head>
	<title>FlexByte</title>
</head>

{#if false}
	<div>Loading</div>
{:else}
	<div class="">
		<div class="flex justify-between">
			<h2 class="text-2xl font-bold">Create Flex</h2>
			<Button color="primary" on:click={submitCreateFlex}>
				Done
				<CheckOutline class="w-4 h-4 ml-2" />
			</Button>
		</div>
		<br />
		<Card class="shadow-none max-w-full">
			<SelectFlexType bind:value={$form.flexTypeId} />
		</Card>
		<br />
		<Card class="max-w-full">
			<FlexForm {form} />
			<br />
		</Card>
		<br />
		<!-- <pre>{JSON.stringify($form, null, 2)}</pre> -->
	</div>
{/if}
