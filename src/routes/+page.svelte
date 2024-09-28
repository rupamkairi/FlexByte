<script>
	import { createCollapsible, melt } from '@melt-ui/svelte';
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
				<a href="/auth/login">Login</a>
			</div>
		</nav>
	</header>
</body>
