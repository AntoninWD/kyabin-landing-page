<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import InterestForm from './InterestForm.svelte';
	import Features from '$lib/components/Features.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Hero />
<Features />
<InterestForm {data} />
