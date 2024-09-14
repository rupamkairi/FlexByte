<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import FlexList from '../../../components/app/FlexList.svelte';
	import { company } from '../../../store/company';
	import { flexes } from '../../../store/flexes';
	import { user } from '../../../store/user';
	import { Button } from 'flowbite-svelte';
	import { routes } from '../../../routes';

	onMount(async () => {
		company.subscribe(async () => {
			if (!$company?.id) return;
			const data = (
				await axios.get('/api/flexes', {
					headers: {
						companyId: $company?.id,
						userId: $user?.id
					}
				})
			).data;
			// console.log(data);
			flexes.set(data.flexes);
		});
	});
</script>

<head>
	<title>FlexByte</title>
</head>

{#if !$flexes}
	<div>Loading</div>
{:else}
	<div class="">
		<div class="flex justify-between">
			<h2 class="text-2xl font-bold">Flexes</h2>
			<Button href={routes.app.createFlex} color="primary" outline>Create</Button>
		</div>
		<FlexList {flexes} />
	</div>
{/if}
