<script lang="ts">
	import { fly } from 'svelte/transition';

	export let src: string;
    export let alt: string;
    export let style: string;
    export let width: number | string = 'auto';
    export let height: number  | string = 'auto';

	function preload(src: string) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}
</script>

{#await preload(src) then _}
	<img {src} {alt} class={style} in:fly {width} {height} />
{/await}
