import type { PageServerLoad } from './$types';
import { XataClient } from '$lib/xata';
import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';

const xata = new XataClient({
	apiKey: env.XATA_API_KEY
});

export const load = (async ({ url }) => {
	const pageInfo = await xata.db.Pages.filter({ name: 'home' }).getFirst();
	const langs = pageInfo?.lang;

	const lang = url.searchParams.get('lang') || 'en';

	let content;
	switch (lang) {
		case 'en':
			content = await xata.db.Pages.filter({ name: 'home' })
				.select(['lang', 'PageContent.*'])
				.getFirst();
			break;
		case 'es':
			if (langs?.includes('es')) {
				content = await xata.db.Pages.filter({ name: 'home' })
					.select(['lang', 'PageContentES.*', 'PageContent.*'])
					.getFirst();
			} else {
				throw redirect(302, '/');
			}
	}
	console.log(content);
	
	return { content };
}) as PageServerLoad;
