<script lang="ts">
	import Icon from './Icon.svelte';
	import IconCard from './IconCard.svelte';
	import { Campfire, Mountains, FishSimple, PawPrint, ArrowDown } from 'phosphor-svelte';
</script>

<section class="lg:p-12 z-10">
	<div class="grid lg:max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-6 p-2">
			<h1
				class="max-w-2xl mb-4 text-4xl tracking-tight text-primary-900 md:text-5xl xl:text-6xl"
			>
				Gérez votre pourvoirie en toute simplicité.
			</h1>
			<ul
				class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl space-y-2"
			>
				<li>
					Optimisez la gestion de votre entreprise de plein air grâce à notre logiciel de pointe.
				</li>
				<li>
					Contrôlez efficacement vos réservations, vos inventaires, votre expérience client et bien
					plus encore!
				</li>
				<li>
					Lancez-vous dans cette aventure et pêchez le succès à chaque étape de votre expérience.
				</li>
			</ul>

			<button
				type="button"
				class="text-white text-sm md:text-xl bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 focus:outline-none flex items-center space-x-2"
			>
				<span> Rejoindre la liste d'attente </span>
				<Icon icon={ArrowDown} />
			</button>
		</div>
		<div class="hidden lg:mt-0 lg:col-span-6 lg:flex relative">
			<div class="w-64 h-96 rounded-lg overflow-hidden absolute top-0 right-1/2 shadow-md">
				<img src="/images/fishing.jpg" alt="fishing" class="object-cover w-full h-full" />
			</div>
			<div class="w-64 h-96 rounded-lg overflow-hidden absolute right-8 -bottom-32 shadow-md">
				<img src="/images/cabin.jpg" alt="cabin" class="object-cover w-full h-full" />
			</div>
			<div class="z-10 absolute top-[360px] left-8">
				<IconCard icon={Campfire} color="orange" />
			</div>
			<div class="z-10 absolute right-16 bottom-1/2">
				<IconCard icon={Mountains} color="green" />
			</div>
			<div class="z-10 absolute -top-6 right-[400px]">
				<IconCard icon={FishSimple} color="blue" />
			</div>
			<div class="z-10 absolute -bottom-36 right-1/4">
				<IconCard icon={PawPrint} color="red" />
			</div>
		</div>
	</div>
</section>
