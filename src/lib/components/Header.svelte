<script lang="ts">
	import Image from "./Image.svelte";
	import brandImage from "$lib/images/kyabin-trans.png"
</script>

<header>
	<nav class="px-4 lg:px-6 py-4">
		<div class="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
			<a href="/" class="flex items-center w-48">
				<Image src={brandImage} alt="Kyabin" style="mr-2 h-full w-full" />
			</a>
		</div>
	</nav>
</header>
