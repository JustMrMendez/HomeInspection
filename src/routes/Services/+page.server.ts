import { env } from '$env/dynamic/private';
import { XataClient } from '$lib/xata';
import type { PageServerLoad } from './$types';

const xata = new XataClient({
	apiKey: env.XATA_API_KEY
});

export const load = (async () => {
	const services = await xata.db.Services.getAll().catch((err) => {
		console.error(err);
		return { error: err };
	});
    console.log(services);
    

	return { services };
}) satisfies PageServerLoad;
