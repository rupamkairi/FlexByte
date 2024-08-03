<script>
	import { clerk } from '$lib';
	import { Button, Input, Label } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import FlexDetails from '../../../components/app/FlexDetails.svelte';
	import FlexList from '../../../components/app/FlexList.svelte';

	let loaded = false;
	let flexes = [];
	onMount(async () => {
		await clerk.load();
		loaded = clerk.loaded;

		let res = await (await fetch('/api/flexes')).json();
		flexes = res.flexes;
		console.log(clerk.user);
	});
</script>

<head>
	<title>FlexByte</title>
</head>
<body>
	{#if !loaded}
		<div>Loading</div>
	{:else}
		<div class="container mx-auto m-4">
			<p>Flexes</p>
			<pre>{JSON.stringify({ flexes }, null, 2)}</pre>
		</div>
		<FlexDetails />
		<FlexList />
	{/if}
</body>
