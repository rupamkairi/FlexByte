<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { routes } from '../../../routes';
	import { clerk } from '$lib';

	onMount(async () => {
		await clerk.load();
		if (clerk.user) goto(routes.app.root, { replaceState: true });
		clerk.openSignIn();
	});
</script>

<head>
	<title>Login</title>
</head>
<body>
	<div class="container mx-auto">
		<div class="flex justify-center">
			<div class="pt-10">
				<!-- <Button
					color="alternative"
					on:click={() => {
						clerk.openSignIn();
					}}>Login with Google</Button
				> -->
			</div>
		</div>
	</div>
</body>
