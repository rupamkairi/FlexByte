<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

	import { onMount } from 'svelte';
	import axios from 'axios';
	import { company } from '../../../../store/company';
	import FlexDetails from '../../../../components/app/FlexDetails.svelte';

	const flex_id = data?.params?.flex_id;
	let flex: any;

	onMount(async () => {
		company.subscribe(async () => {
			if (!$company?.id) return;
			const data = (await axios.get(`/api/flexes/${flex_id}`)).data;
			flex = data.flex;
		});
	});
</script>

<div>
	<p>{flex?.name}</p>
	<FlexDetails />
</div>
