<script>
	import { clerk } from '$lib';
	import { onMount } from 'svelte';
	import { clerkUser, user } from '../../store/user';
	import Navbar from './Navbar.svelte';
	import Sidebar from './Sidebar.svelte';
	import axios from 'axios';
	import { company } from '../../store/company';

	let drawerHidden = false;

	onMount(async () => {
		await clerk.load();
		if (!clerk.user) return;
		clerkUser.set(clerk.user);
		const data = (await axios.post('/api/me', { clerkUserId: clerk.user.id })).data;
		console.log(data);
		user.set(data.user);
		company.set(data.company);
	});
</script>

<header
	class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
>
	<Navbar bind:drawerHidden />
</header>
<div class="overflow-hidden lg:flex">
	<Sidebar bind:drawerHidden />
	<div class="relative h-full w-full overflow-y-auto lg:ml-64 pt-[70px]">
		<slot />
	</div>
</div>
