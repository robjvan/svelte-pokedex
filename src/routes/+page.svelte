<script>
	import { pokemon } from '../stores/pokestore';
	import PokemanCard from '../components/pokemanCard.svelte';

	let searchTerm = '';
	/**
	 * @type {any[]}
	 */
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
		} else {
			filteredPokemon = [ ...$pokemon ]
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>

<input
	type="text"
	placeholder="Search Pokemon"
	class="w-full rounded-md text-lg p-4 border-2 border-grey-200"
	bind:value={searchTerm}
/>

<div class="grid gap-4 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 py-4">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>
