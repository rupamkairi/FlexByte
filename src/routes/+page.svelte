<script>
	import SearchShowcase from '$/components/search/SearchShowcase.svelte';
	import { createCollapsible } from '@melt-ui/svelte';
	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible();
</script>

<head>
	<title>FlexByte</title>
</head>
<body>
	<header class="container mx-auto p-2">
		<nav class="flex justify-between items-center">
			<div>
				<a href="/"> <h1>FlexByte</h1></a>
			</div>
			<div class="flex gap-2 items-center">
				<a href="/explore">Explore</a>
				<a href="/auth/login">Login</a>
			</div>
		</nav>
	</header>
	<main>
		<div>
			<SearchShowcase />
		</div>
	</main>
</body>
