<script lang="ts">
	import FlexForm from '$/components/ui/forms/FlexForm.svelte';
	import SelectFlexType from '$/components/ui/forms/SelectFlexType.svelte';
	import { company } from '$/store/company';
	import { user } from '$/store/user';
	import { init } from '$/utils/init';
	import axios from 'axios';
	import { Button, Card } from 'flowbite-svelte';
	import { CheckOutline } from 'flowbite-svelte-icons';
	import { superForm } from 'sveltekit-superforms';

	export let data;
	const { form } = superForm(data.form);

	init();

	async function submitCreateFlex() {
		$form.area = (+$form.width * +$form.height).toString();
		console.log($form);

		const data = (
			await axios.post('/api/flexes', $form, {
				headers: {
					companyId: $company?.id,
					userId: $user?.id
				}
			})
		).data;
	}
</script>

<head>
	<title>Create Flex - FlexByte</title>
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
