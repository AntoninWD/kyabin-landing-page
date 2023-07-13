<script lang="ts">
	import Icon from './Icon.svelte';
	import IconCard from './IconCard.svelte';
	import { Tent, Mountains, FishSimple, PawPrint, ArrowDown, CursorClick } from 'phosphor-svelte';

	function scrollIntoView({ target }: any) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<section class="lg:p-12 z-10">
	<div class="grid lg:max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		<div class="mx-auto text-center lg:mr-auto lg:text-start place-self-center lg:col-span-6 p-2">
			<h1 class="max-w-2xl mb-4 text-4xl tracking-tight text-primary-900 md:text-5xl xl:text-6xl">
				Gérez votre pourvoirie en toute simplicité.
			</h1>
			<ul class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl space-y-2">
				<li>Optimisez la gestion de votre entreprise grâce à notre logiciel de pointe.</li>
				<li>
					Maîtrisez efficacement vos réservations, inventaires, clientèles, captures, et bien plus
					encore !
				</li>
				<li>
					Lancez-vous dans cette aventure et pêchez le succès à chaque étape de votre expérience.
				</li>
			</ul>

			<a
				href="#interest-form"
				class="mx-auto lg:mx-0 flex w-fit text-white text-sm md:text-xl bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 focus:outline-none items-center space-x-2"
				on:click|preventDefault={scrollIntoView}
			>
				<div class="pointer-events-none flex items-center space-x-4">
					<span> Rejoindre la liste d'attente </span>
					<Icon icon={ArrowDown} />
				</div>
			</a>
		</div>			
		
		<div class="relative h-[950px] lg:h-[550px] mt-12 px-24 space-x-8 lg:col-span-6">
			<div class="absolute right-1/2 w-full max-w-[350px] transform translate-x-1/2 lg:w-1/2 lg:transform-none lg:left-0">
				<div class="relative">
					<div class="shadow-lg rounded-lg overflow-hidden">
						<img src="/images/fishing2.jpg" alt="fishing" class="object-cover w-full h-full" />
					</div>
					<div class="absolute -bottom-4 left-4">
						<IconCard icon={FishSimple} color="blue" />
					</div>
					<div class="absolute top-48 right-4 lg:top-32">
						<IconCard icon={Tent} color="orange" />
					</div>
				</div>
			</div>
			<div class="absolute right-1/2 top-[500px] w-full max-w-[350px] transform translate-x-1/2 lg:w-1/2 lg:transform-none lg:right-2 lg:top-[300px]">
				<div class="relative">
					<div class="shadow-lg rounded-lg overflow-hidden">
						<img src="/images/cabin3.jpg" alt="fishing" class="object-cover w-full h-full" />
					</div>
					<div class="absolute top-12 left-12">
						<IconCard icon={Mountains} color="green" />
					</div>

					<div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
						<IconCard icon={PawPrint} color="red" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
