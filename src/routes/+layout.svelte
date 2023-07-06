<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="relative overflow-hidden min-h-screen">
	<Header />
	<slot />
	<Footer />
</main>
