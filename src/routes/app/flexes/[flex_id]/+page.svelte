<script lang="ts">
	import FlexForm from '$/components/ui/forms/FlexForm.svelte';
	import SelectFlexType from '$/components/ui/forms/SelectFlexType.svelte';
	import axios from 'axios';
	import { Card, Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { superForm } from 'sveltekit-superforms';
	import { company } from '../../../../store/company';
	import { init } from '$/utils/init';
	import { user } from '$/store/user';
	import { CheckOutline } from 'flowbite-svelte-icons';

	export let data;
	const { form } = superForm(data.form);

	init();

	const flex_id = data.params.flex_id;
	onMount(async () => {
		company.subscribe(async () => {
			if (!$company?.id) return;
			const data = (await axios.get(`/api/flexes/${flex_id}`)).data;
			data.flex.lat = data.flex.latitude;
			data.flex.lng = data.flex.longitude;
			form.set(data.flex);
		});
	});

	async function submitUpdateFlex() {
		$form.area = (+$form.width * +$form.height).toString();
		console.log($form);

		const data = (
			await axios.patch(`/api/flexes/${flex_id}`, $form, {
				headers: {
					companyId: $company?.id,
					userId: $user?.id
				}
			})
		).data;
	}
</script>

<head>
	<title>Update Flex - FlexByte</title>
</head>

{#if false}
	<div>Loading</div>
{:else}
	<div>
		<div class="flex justify-between">
			<h2 class="text-2xl font-bold">Update Flex</h2>
			<Button color="primary" on:click={submitUpdateFlex}>
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
