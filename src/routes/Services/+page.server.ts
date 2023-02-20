import { XATA_API_KEY } from '$env/static/private';
import { XataClient } from '$lib/xata';
import type { PageServerLoad } from './$types';

const xata = new XataClient({
	apiKey: XATA_API_KEY
});

export const load = (async () => {
	const services = await xata.db.ServicesEN.getAll().catch((err) => {
		console.error(err);
		return { error: err };
	});
	console.log(services);

	return { services };
}) satisfies PageServerLoad;
