<script lang="ts">
	import { fly } from 'svelte/transition';

	export let src: string;
	export let alt: string;
	export let style: string = '';
	export let width: number | string = 'auto';
	export let height: number | string = 'auto';

</script>

<img {src} {alt} class={style} in:fly={{
	duration: 1000,
	delay: 1000,
}} {width} {height} />
