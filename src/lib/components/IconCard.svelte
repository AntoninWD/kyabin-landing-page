<script lang="ts">
	export let icon: any;
	export let color: string = 'blue';

	const colors = [
		{
			slug: 'blue',
			border: 'border-blue-500',
			background: 'bg-blue-500',
			shadow: 'shadow-blue-500'
		},
		{
			slug: 'orange',
			border: 'border-orange-500',
			background: 'bg-orange-500',
			shadow: 'shadow-orange-500'
		},
		{
            slug: 'red',
            border: 'border-red-500',
            background: 'bg-red-500',
            shadow: 'shadow-red-500'
        },
        {
            slug: 'green',
            border: 'border-green-500',
            background: 'bg-green-500',
            shadow: 'shadow-green-500'
        },
	];

    const colorClass = colors.find((c) => c.slug === color) || colors[0];

</script>

<div
	class="flex items-center justify-center w-12 h-12 rounded-full border-2 border-opacity-50 shadow-md {colorClass.border} {colorClass.background} {colorClass.shadow}"
>
	<svelte:component this={icon} class="w-6 h-6 text-white" />
</div>
