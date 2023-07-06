<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let icon: any;
	export let size: number = 20;
	export let weight: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone' = 'regular';
	export let color: string = 'currentColor';
</script>

<svelte:component this={icon} {size} {weight} {color} />
