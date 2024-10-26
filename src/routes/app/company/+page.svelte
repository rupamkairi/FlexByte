<script lang="ts">
	import { company } from '$/store/company';
	import axios from 'axios';
	import { Button, Card } from 'flowbite-svelte';
	import { CheckOutline } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';
	import { superForm } from 'sveltekit-superforms';

	export let data;
	const { form } = superForm(data.form);

	onMount(async () => {
		company.subscribe(async () => {
			if (!$company?.id) return;
			const data = (await axios.get(`/api/companies/${$company?.id!}`)).data;
			console.log(data);
		});
	});
</script>

<head>
	<title>Company - FlexByte</title>
</head>
{#if false}
	<div>Loading</div>
{:else}
	<div class="">
		<div class="flex justify-between">
			<h2 class="text-2xl font-bold">Company</h2>
			<Button color="primary" on:click={() => {}}>
				Done
				<CheckOutline class="w-4 h-4 ml-2" />
			</Button>
		</div>

		<br />
		<Card class="shadow-none max-w-full">
			<!-- <SelectFlexType bind:value={$form.flexTypeId} /> -->
		</Card>

		<br />
		<Card class="max-w-full">
			<!-- <FlexForm {form} /> -->
			<br />
		</Card>

		<br />
		<Card class="max-w-full border-red-500 shadow-red-200">
			<!-- <SelectFlexType bind:value={$form.flexTypeId} /> -->
		</Card>

		<br />
		<!-- <pre>{JSON.stringify($form, null, 2)}</pre> -->
	</div>
{/if}
