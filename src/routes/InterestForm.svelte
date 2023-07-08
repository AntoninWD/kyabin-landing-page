<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;
	let submitSuccess = false;
	let submitError = false;

	const { form, errors, enhance, submitting } = superForm(data.form, {
		resetForm: true,
		onResult: ({ result }) => {
			if (result.type === 'success') {
				submitSuccess = true;
			}
		},
		onError: ({ result }) => {
			if (result.type === 'error') {
				submitError = true;
			}
		}
	});
</script>

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-24">
	<div class="w-full bg-white rounded-lg shadow p-12 md:mt-0 sm:max-w-xl">
		<img class="w-24 h-24 mx-auto mb-8" src="/images/kyabin-logo.png" alt="Logo" />
		<h1 class="text-xl font-bold text-primary-700 md:text-2xl text-center">
			Inscrivez-vous sur notre liste d'attente!
		</h1>
		<p class="py-10 text-gray-500 dark:text-gray-600 text-center">
			Inscrivez-vous dès maintenant sur notre liste d'attente pour être informé en exclusivité de
			l'avancement de notre projet et être parmi les premiers à accéder à notre application tant
			attendue.
		</p>
		<form class="space-y-4 md:space-y-6" method="POST" use:enhance>
			<label class="block mb-2 text-md font-medium text-gray-700 space-y-2" for="lodge_name">
				<span>Nom d'entreprise</span>
				<input
					class="bg-gray-50 border border-gray-300 text-gray-700 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					type="text"
					name="lodge_name"
					bind:value={$form.lodge_name}
				/>
				{#if $errors.lodge_name}<span class="text-red-500">{$errors.lodge_name}</span>{/if}
			</label>

			<label class="block mb-2 text-md font-medium text-gray-700 space-y-2" for="email">
				<span>Adresse courriel</span>
				<input
					class="bg-gray-50 border border-gray-300 text-gray-700 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					type="email"
					name="email"
					bind:value={$form.email}
				/>
				{#if $errors.email}<span class="text-red-500">{$errors.email}</span>{/if}
			</label>

			<Button type="submit" label="Envoyer" loading={$submitting} />
			{#if submitError}
				<span class="block text-red-600 text-center"
					>Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer plus tard.</span
				>
			{/if}
			{#if submitSuccess}
				<span class="block text-green-600 text-center"
					>Votre demande a été envoyée avec succès! Merci de votre intérêt.</span
				>
			{/if}
		</form>
	</div>
</div>
