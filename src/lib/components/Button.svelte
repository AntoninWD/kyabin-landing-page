<script lang="ts">
	export let label: string;
	export let type: 'submit' | 'reset' | 'button' = 'button';
	export let loading: boolean = false;
</script>
<button
	{type}
	disabled={loading}
	class={`flex items-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ${
		loading ? 'cursor-not-allowed opacity-70' : ''
	}`}
>
	{loading ? 'Envoi...' : label}
	<span class="sr-only">Loading...</span>
</button>
