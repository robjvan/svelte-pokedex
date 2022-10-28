<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const pokeman = data.props.pokeman;
	console.log(pokeman);
</script>

<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
<img
	class="h-80 w-80 mx-auto center"
	src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeman.id}.png`}
	alt={pokeman.name}
/>

<div class="stats-box">
	<p class="text-center">
		<span class="font-bold">Types: </span>
		{#each pokeman.types as type}
			<span class="capitalize">{type.type.name} </span>
		{/each}
	</p>
	<table class="mx-auto">
		<tr>
			<td><span class="font-bold">HP: </span><span>{pokeman.stats[0].base_stat}</span></td>
			<td class="spacer" />
			<td><span class="font-bold">Speed: </span><span>{pokeman.stats[5].base_stat}</span></td>
		</tr>
		<tr>
			<td><span class="font-bold">Atk: </span><span>{pokeman.stats[1].base_stat}</span></td>
			<td class="spacer" />
			<td><span class="font-bold">Def: </span><span>{pokeman.stats[2].base_stat}</span></td>
		</tr>
		<tr>
			<td><span class="font-bold">Sp Atk: </span><span>{pokeman.stats[3].base_stat}</span></td>
			<td class="spacer" />
			<td><span class="font-bold">Sp Def : </span><span>{pokeman.stats[4].base_stat}</span></td>
		</tr>
	</table>
</div>

<style>
	.spacer {
		width: 60px;
	}
</style>
