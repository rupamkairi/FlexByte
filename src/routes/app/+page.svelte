<script>
	import { Button, Input, Label } from 'flowbite-svelte';
	import { clerkUser } from '../../store/user';
	import { company } from '../../store/company';
</script>

<head>
	<title>FlexByte</title>
</head>

{#if !$company}
	<div>Loading</div>
{:else}
	<div>
		<h1>{$company?.name}</h1>
		<!-- <Label>Company Name</Label>
		<div class="flex gap-2">
			<Input bind:value={companyName} />
			<Button color="alternative" on:click={handleSave}>Save</Button>
			</div> -->
		<slot />
	</div>
{/if}
