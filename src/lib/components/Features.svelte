<script lang="ts">
	import Icon from './Icon.svelte';
	import { BagSimple, ChartBar, FishSimple, Users, Plus, House } from 'phosphor-svelte';

	const features = [
		{
			icon: House,
			title: 'Réservations simplifiées',
			description:
				'Gérez facilement les réservations de vos clients grâce à une interface conviviale. Suivez les disponibilités, confirmez les réservations, envoyez des rappels et gérez les annulations en quelques clics.'
		},
		{
			icon: BagSimple,
			title: 'Gestion des inventaires',
			description:
				"Gardez une trace précise de votre inventaire d'équipement. Suivez les niveaux de stock, recevez des alertes pour les réapprovisionnements et optimisez votre gestion des ressources."
		},
		{
			icon: ChartBar,
			title: 'Analyse et rapports',
			description:
				'Obtenez des informations précieuses sur les performances de votre pourvoirie. Analysez les statistiques clés, les tendances de réservation, les taux de satisfaction client, et générez des rapports détaillés pour prendre des décisions éclairées et optimiser vos opérations.'
		},
		{
			icon: FishSimple,
			title: 'Suivi des captures',
			description:
				"Suivez les captures de chasse et de pêche dans votre pourvoirie. Enregistrez les espèces, tailles, quantités et détails de chaque capture. Obtenez des rapports détaillés pour analyser les performances, ajuster les offres et améliorer l'expérience globale de chasse et de pêche."
		},
		{
			icon: Users,
			title: 'Gestion des clients',
			description:
				"Gérez facilement les informations de vos clients en enregistrant leurs coordonnées, préférences et autres détails pertinents. Personnalisez et améliorez continuellement l'expérience de vos clients pour favoriser leur fidélisation à long terme."
		},
		{
			icon: Plus,
			title: "En constante adaptation",
			description:
				'Nous fesons constamment évoluer notre plateforme pour répondre aux besoins de nos clients. Nous sommes à votre écoute et nous nous assurons que notre plateforme répondra à vos besoins.'
		}
	];
</script>

<section class="bg-primary-700 text-white">
	<div class="py-12 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
		<div class="max-w-screen-md mb-8 lg:mb-16">
			<h2 class="mb-4 text-4xl text-white">Ce que nous offrons</h2>
		</div>
		<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
			{#each features as feature}
				<div>
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-200/30 shadow-md lg:h-12 lg:w-12"
					>
						<Icon icon={feature.icon} />
					</div>
					<h3 class="mb-2 text-xl font-bold">{feature.title}</h3>
					<p class="text-gray-300">
						{feature.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
