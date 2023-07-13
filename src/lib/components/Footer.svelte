<script>
	import Image from './Image.svelte';
	import brandImage from "$lib/images/kyabin-trans-light.png"
	const currYear = new Date().getFullYear();
</script>

<footer class="p-4 bg-primary-900 md:p-8 lg:p-10">
	<div class="mx-auto max-w-screen-xl text-center flex items-center flex-col">
		<a href="/" class="flex items-center justify-center w-48">
			<Image src={brandImage} alt="Kyabin" style="mr-2 h-full w-full" />
		</a>
		<p class="mt-6 text-gray-300">
			Le logiciel de gestion de pourvoirie le plus complet et le plus simple à utiliser.
		</p>

		<div class="flex items-center justify-center my-6 space-x-2">
			<span class="text-gray-300">Contactez-nous:</span>
			<a href="mailto:antonin@kyabin.com" class="text-gray-400 hover:underline"> antonin@kyabin.com </a>
		</div>

		<span class="text-sm text-gray-300 sm:text-center"
			>© {currYear} Kyabin™. Tous droits réservés.</span
		>
	</div>
</footer>
