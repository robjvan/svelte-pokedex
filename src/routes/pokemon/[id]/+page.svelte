
<script>
  /** @type {import('./$types').PageData} */
  export let data;
  const pokeman = data.props.pokeman;
  console.log(pokeman);
</script>

<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
<img class="h-80 w-80 mx-auto center" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeman.id}.png`} alt={pokeman.name} /> 