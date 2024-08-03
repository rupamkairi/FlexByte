<script>
	import { clerk } from '$lib';
	import { Button, Input, Label } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let loaded = false;
	onMount(async () => {
		await clerk.load();
		loaded = clerk.loaded;

		console.log(clerk.user);
	});

	let companyName = '';
	function handleSave() {
		console.log();
	}
</script>

<head>
	<title>FlexByte</title>
</head>
<body>
	{#if !loaded}
		<div>Loading</div>
	{:else}
		<div class="max-w-screen-sm mx-auto m-4 border rounded-lg p-8">
			<div class="mb-4">
				<h1 class="text-xl font-bold">{clerk?.user?.fullName}</h1>
			</div>
			<Label>Company Name</Label>
			<div class="flex gap-2">
				<Input bind:value={companyName} />
				<Button color="alternative" on:click={handleSave}>Save</Button>
			</div>
		</div>

		<slot />
	{/if}
</body>
