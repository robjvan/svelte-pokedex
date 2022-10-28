export async function load({ fetch, params }) {
	//make api call for more info based on passed if
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokeman = await res.json();
	return { 
    props: { pokeman: pokeman } 
  };
}
