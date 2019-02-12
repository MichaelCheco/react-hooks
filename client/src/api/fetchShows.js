const sleep = ms => new Promise(r => setTimeout(() => r(), ms));

export async function fetchShowsBySearchTerm(searchTerm) {
	await sleep(3000);
	const res = await fetch(
		`https://api.tvmaze.com/search/shows?q=${searchTerm}`
	);
	return await res.json();
}
