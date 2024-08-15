<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import FlexDetails from '../../../components/app/FlexDetails.svelte';
	import FlexList from '../../../components/app/FlexList.svelte';
	import { clerkUser, user } from '../../../store/user';
	import { company } from '../../../store/company';
	import { flexes } from '../../../store/flexes';

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
			console.log(data);
			flexes.set(data.flexes);
		});
	});
</script>

<head>
	<title>FlexByte</title>
</head>
<body>
	{#if !$flexes}
		<div>Loading</div>
	{:else}
		<div class="container mx-auto m-4">
			<p>Flexes</p>
			<pre>{JSON.stringify($flexes, null, 2)}</pre>
		</div>
		<FlexDetails />
		<FlexList />
	{/if}
</body>
