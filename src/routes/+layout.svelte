<script>
	import '../app.css';
	import { DarkMode } from 'flowbite-svelte';
</script>

<html lang="en">
	<!-- <DarkMode /> -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>

	<body>
		<slot />
	</body>
</html>
