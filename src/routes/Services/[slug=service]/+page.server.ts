import { XataClient } from '$lib/xata';
import { XATA_API_KEY, XATA_FALLBACK_BRANCH } from '$env/static/private';
import { error } from '@sveltejs/kit';

const xata = new XataClient({
	apiKey: XATA_API_KEY,
	branch: XATA_FALLBACK_BRANCH
});

export const load = async ({ params }) => {
	const slug = params.slug;
	const service = await xata.db.ServicesEN.filter('slug', slug)
		.select(['id', 'title', 'slug', 'icon', 'description', 'title2', 'long_description'])
		.getFirst();

        console.log(service);
    
	if (!service) {
		throw error(404, 'Service not found');
	}

	return { service };
};
