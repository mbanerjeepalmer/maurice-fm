export async function graphCMSRequest({ variables = {}, query }) {
	let postsRequest = await fetch(import.meta.env.VITE_GRAPHCMS_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: query,
			variables: variables
		})
	});

	return await postsRequest.json();
}
