import { XataClient } from '$lib/xata';
import { error } from '@sveltejs/kit';
import { contains } from '@xata.io/client';
import type { PageServerLoad } from './$types';
import { XATA_API_KEY } from '$env/static/private';

const xata = new XataClient({
	apiKey: XATA_API_KEY
});

export const load = (async ({ params }) => {
	console.log(params.service);

	const service = await xata.db.ServicesES.filter('link', contains(params.service))
		.getFirst()
		.catch((err) => {
			console.error();
			throw error(404, err);
		});

	if (!service) {
		throw error(404, 'Service not found');
	}

	console.log(service);

	return { service };
}) satisfies PageServerLoad;
