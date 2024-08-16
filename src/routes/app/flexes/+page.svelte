<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import FlexList from '../../../components/app/FlexList.svelte';
	import { company } from '../../../store/company';
	import { flexes } from '../../../store/flexes';
	import { user } from '../../../store/user';

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
		<p>Flexes</p>
		<FlexList {flexes} />
	</div>
{/if}
